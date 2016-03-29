var allCornerstoneEvents = 'CornerstoneToolsMouseDown CornerstoneToolsMouseDownActivate ' +
    'CornerstoneToolsMouseClick CornerstoneToolsMouseDrag CornerstoneToolsMouseUp ' +
    'CornerstoneToolsMouseWheel CornerstoneToolsTap CornerstoneToolsTouchPress ' +
    'CornerstoneToolsTouchStart CornerstoneToolsTouchStartActive ' +
    'CornerstoneToolsMultiTouchDragStart';

var OHIF = {
    viewer: {
        cine: {
            loop: true,
            framesPerSecond:24
        },
        loadedSeriesData: {}
    }
};

/**
 * This function loads a study series into a viewport element.
 *
 * @param data {object} Object containing the study, series, and viewport element to be used
 */
function loadSeriesIntoViewport(data) {
    // Make sure we have all the data required to render the series
    if (!data.study || !data.series || !data.element) {
        return;
    }

    // Get the current element and it's index in the list of all viewports
    // The viewport index is often used to store information about a viewport element
    var element = data.element;
    var viewportIndex = $('.imageViewerViewport').index(element);

    // Create an empty array to populate with image IDs
    var imageIds = [];

    // Loop through the current series and add metadata to the
    // Cornerstone meta data provider. This will be used to fill information
    // into the viewport overlays, and to calculate reference lines and orientation markers
    var series = data.series;
    var numImages = series.instances.length;
    var imageId;

    series.instances.forEach(function(instance, imageIndex) {
        var metaData = {
            instance: instance,
            series: series,
            study: data.study,
            numImages: numImages,
            imageIndex: imageIndex + 1
        };

        var numFrames = instance.numFrames;
        if (numFrames > 1) {
            console.log('Multiframe image detected');
            for (var i = 0; i < numFrames; i++) {
                metaData.frame = i;
                imageId = getImageId(instance, i);
                imageIds.push(imageId);
                //addMetaData(imageId, metaData);
            }
        } else {
            imageId = getImageId(instance);
            imageIds.push(imageId);
            //addMetaData(imageId, metaData);
        }
    });

    // Define the current image stack using the newly created image IDs
    var stack = {
        currentImageIdIndex: data.currentImageIdIndex || 0,
        imageIds: imageIds
    };

    // Get the current image ID for the stack that will be rendered
    imageId = imageIds[stack.currentImageIdIndex];

    // Save the current image ID inside the ViewportLoading object.
    // 
    // The ViewportLoading object relates the viewport elements with whichever
    // image is currently being loaded into them. This is useful so that we can
    // place progress (download %) for each image inside the proper viewports.
    //ViewportLoading[viewportIndex] = imageId;

    // Enable Cornerstone for the viewport element
    //
    // NOTE: This uses the experimental WebGL renderer for Cornerstone!
    // If you have problems, replace it with this line instead:
    // cornerstone.enable(element);
    cornerstone.enable(element);

    // Start loading the image.
    cornerstone.loadAndCacheImage(imageId).then(function(image) {
        var enabledElement;
        try {
            enabledElement = cornerstone.getEnabledElement(element);
        } catch (error) {
            console.warn('Viewport destroyed before loaded image could be displayed');
            return;
        }

        // If there is a saved object containing Cornerstone viewport data
        // (e.g. scale, invert, window settings) in the input data, apply it now.
        //
        // Otherwise, display the loaded image in the viewport element with the
        // default viewport settings.
        if (data.viewport) {
            cornerstone.displayImage(element, image, data.viewport);
        } else {
            cornerstone.displayImage(element, image);
        }

        // Remove the data for this viewport from the ViewportLoading object
        // This will stop the loading percentage complete from being displayed.
        //delete ViewportLoading[viewportIndex];

        // Resize the canvas to fit the current viewport element size. Fit the displayed
        // image to the canvas dimensions.
        cornerstone.resize(element, true);

        // Add stack state managers for the stack tool, CINE tool, and reference lines
        cornerstoneTools.addStackStateManager(element, [ 'stack', 'playClip', 'referenceLines' ]);

        // Get the current viewport settings
        var viewport = cornerstone.getViewport(element);

        // Clear any old stack data
        cornerstoneTools.clearToolState(element, 'stack');
        cornerstoneTools.addToolState(element, 'stack', stack);

        // Set the default CINE settings
        var frameRate = 1000 / series.instances[0].frameTime;
        var cineToolData = {
            loop: OHIF.viewer.cine.loop,
            framesPerSecond: frameRate || OHIF.viewer.cine.framesPerSecond
        };
        cornerstoneTools.addToolState(element, 'playClip', cineToolData);

        // Autoplay datasets that have framerates set
        if (frameRate) {
            cornerstoneTools.playClip(element);
        }

        // Enable mouse, mouseWheel, touch, and keyboard input on the element
        cornerstoneTools.mouseInput.enable(element);
        cornerstoneTools.touchInput.enable(element);
        cornerstoneTools.mouseWheelInput.enable(element);
        cornerstoneTools.keyboardInput.enable(element);

        // Use the tool manager to enable the currently active tool for this
        // newly rendered element
        var activeTool = toolManager.getActiveTool();
        toolManager.setActiveTool(activeTool, [ element ]);

        // Define a function to run whenever the Cornerstone viewport changes images
        // (e.g. during scrolling)
        function onNewImage(e, eventData) {
            console.log('imageViewerViewport onNewImage');

            // Update the templateData with the new imageId
            // This allows the template helpers to update reactively
            imageId = eventData.enabledElement.image.imageId;
            //Session.set('CornerstoneNewImage' + viewportIndex, Random.id());

            // Get the element and stack data
            var element = e.target;
            var toolData = cornerstoneTools.getToolState(element, 'stack');
            if (!toolData || !toolData.data || !toolData.data.length) {
                return;
            }

            var stack = toolData.data[0];

            // Update the imageSlider value
            var currentOverlay = $(element).siblings('.imageViewerViewportOverlay');
            var currentImageSlider = currentOverlay.find('#imageSlider');
            currentImageSlider.val(stack.currentImageIdIndex + 1);

            // If this viewport is displaying a stack of images, save the current image
            // index in the stack to the global ViewerData object, as well as the Meteor Session.
            var stack = cornerstoneTools.getToolState(element, 'stack');
            if (stack && stack.data.length && stack.data[0].imageIds.length > 1) {
                var imageIdIndex = stack.data[0].imageIds.indexOf(imageId);
                //ViewerData[contentId].loadedSeriesData[viewportIndex].currentImageIdIndex = imageIdIndex;
                //Session.set('ViewerData', ViewerData);
            }
        }

        // Attach the onNewImage callback to the CornerstoneNewImage event
        $(element).off('CornerstoneNewImage', onNewImage);
        $(element).on('CornerstoneNewImage', onNewImage);

        function OnStackScroll(e, eventData) {
            // Get the element and stack data
            var element = e.target;
            var toolData = cornerstoneTools.getToolState(element, 'stack');
            if (!toolData || !toolData.data || !toolData.data.length) {
                return;
            }

            var stack = toolData.data[0];

            // Update the imageSlider value
            var currentOverlay = $(element).siblings('.imageViewerViewportOverlay');
            var currentImageSlider = currentOverlay.find('#imageSlider');
            currentImageSlider.val(stack.currentImageIdIndex + 1);
        }

        $(element).off('CornerstoneStackScroll', OnStackScroll);
        if (stack.imageIds.length > 1) {
            $(element).on('CornerstoneStackScroll', OnStackScroll);
        }

        // Define a function to trigger an event whenever a new viewport is being used
        // This is used to update the value of the "active viewport", when the user interacts
        // with a new viewport element
        function sendActivationTrigger(e, eventData) {
            // Check if the current active viewport in the Meteor Session
            // Is the same as the viewport in which the activation event was fired.
            // If it was, no changes are necessary, so stop here.
            var element = eventData.element;
            var activeViewportIndex = 0; //Session.get('activeViewport');
            var viewportIndex = $('.imageViewerViewport').index(element);

            // Reset the focus, even if we don't need to re-enable reference lines or prefetching
            $(element).focus();

            if (viewportIndex === activeViewportIndex) {
                return;
            }

            console.log('imageViewerViewport sendActivationTrigger');

            // Otherwise, trigger an 'ActivateViewport' event to be handled by the Template event
            // handler
            eventData.viewportIndex = viewportIndex;
            var customEvent = $.Event('ActivateViewport', eventData);

            // Need to overwrite the type set in the original event
            customEvent.type = 'ActivateViewport';
            $(e.target).trigger(customEvent, eventData);
        }

        // Attach the sendActivationTrigger function to all of the Cornerstone interaction events
        $(element).off(allCornerstoneEvents, sendActivationTrigger);
        $(element).on(allCornerstoneEvents, sendActivationTrigger);

        // Store the current series data inside a global variable
        OHIF.viewer.loadedSeriesData[viewportIndex] = {
            studyInstanceUid: data.studyInstanceUid,
            seriesInstanceUid: data.seriesInstanceUid,
            currentImageIdIndex: data.currentImageIdIndex,
            viewport: viewport
        };

        // Check if image plane (orientation / loction) data is present for the current image
        var imagePlane = cornerstoneTools.metaData.get('imagePlane', image.imageId);

        // If it is, and reference lines are enabled, add this element to the global synchronizer
        // that is used for updating reference lines, and enable reference lines for this viewport.
        if (OHIF.viewer.refLinesEnabled && imagePlane && imagePlane.frameOfReferenceUID) {
            OHIF.viewer.updateImageSynchronizer.add(element);
        }

        // Set the active viewport based on the Session variable
        // This is done to ensure that the active element has the current
        // focus, so that keyboard events are triggered.
        /*if (viewportIndex === Session.get('activeViewport')) {
            setActiveViewport(element);
        }*/
    }, function(error) {
        // If something goes wrong while loading the image, fire the error handler.
        errorLoadingHandler(element, imageId, error);
    });

    return {
        stack: stack,
        imageId: imageId
    };
}

/**
 * This function sets series for the study and calls LoadSeriesIntoViewport function
 *
 * @param data includes study data
 *
 */
function setSeries(data) {
    var study = data.study;
    if (!study || !study.seriesList) {
        return;
    }

    study.seriesList.every(function(series) {
        if (series.seriesInstanceUid === data.seriesInstanceUid) {
            data.series = series;
            return false;
        }

        return true;
    });

    // If we didn't find anything, stop here
    if (!data.series) {
        return;
    }

    // Otherwise, load pass the data object into loadSeriesIntoViewport
    return loadSeriesIntoViewport(data);
}

/**
 * This function searches an object to return the keys that contain a specific value
 *
 * @param object {object} The object to be searched
 * @param value The value to be found
 *
 * @returns {array} The keys for which the object has the specified value
 */
function getKeysByValue(object, value) {
    // http://stackoverflow.com/questions/9907419/javascript-object-get-key-by-value
    return Object.keys(object).filter(function(key) {
        return object[key] === value;
    });
}

/*Meteor.startup(function() {
    // On Meteor startup, define the global objects used to store loading imageIds
    // by viewport / thumbnail element
    ViewportLoading = {};
    ThumbnailLoading = {};

    // Whenever the CornerstoneImageLoadProgress is fired, identify which viewports
    // the "in-progress" image is to be displayed in. Then pass the percent complete
    // via the Meteor Session to the other templates to be displayed in the relevant viewports.
    $(cornerstone).on('CornerstoneImageLoadProgress', function(e, eventData) {
        viewportIndices = getKeysByValue(ViewportLoading, eventData.imageId);
        viewportIndices.forEach(function(viewportIndex) {
            Session.set('CornerstoneLoadProgress' + viewportIndex, eventData.percentComplete);
        });

        thumbnailIndices = getKeysByValue(ThumbnailLoading, eventData.imageId);
        thumbnailIndices.forEach(function(thumbnailIndex) {
            Session.set('CornerstoneThumbnailLoadProgress' + thumbnailIndex, eventData.percentComplete);
        });
    });
});*/

var config = {
    magnifySize: 300,
    magnificationLevel: 3
};

cornerstoneTools.magnify.setConfiguration(config);

/*'ActivateViewport .imageViewerViewport': function(e) {
    console.log('imageViewerViewport ActivateViewport');
    setActiveViewport(e.currentTarget);
}*/

import React, { Component } from 'react';
import ViewportLoadingIndicator from './ViewportLoadingIndicator';
import ViewportErrorIndicator from './ViewportErrorIndicator';
import ViewportOverlay from './ViewportOverlay';
import ViewportOrientationMarkers from './ViewportOrientationMarkers';
import ImageControls from './ImageControls';
import toolManager from '../../lib/toolManager'
import getImageId from '../../lib/getImageId'

export default class Viewport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: false
        };
    }

    onImageRendered() {
        var element = this.refs.element;
        this.setState({
            viewport: cornerstone.getViewport(element)
        });
    }

    componentDidMount() {
        var element = this.refs.element;

        // Get the current active viewport index, if this viewport has the same index,
        // add the CSS 'active' class to highlight this viewport.
        //var activeViewport = Session.get('activeViewport');

        // Create a data object to pass to the series loading function (loadSeriesIntoViewport)
        var data = {
            element: element,
            //viewport: this.data.viewport,
            currentImageIdIndex: this.props.currentImageIdIndex,
            studyInstanceUid: this.props.studyInstanceUid,
            seriesInstanceUid: this.props.seriesInstanceUid,
            sopInstanceUid: this.props.sopInstanceUid
            //activeViewport: activeViewport
        };


        var studies = this.props.studies;
        if (!studies || !studies.length) {
            return;
        }

        studies.every((study) => {
            if (study.studyInstanceUid === this.props.studyInstanceUid) {
                data.study = study;
                return false;
            }

            return true;
        });

        // If we didn't find anything, stop here
        if (!data.study) {
            return;
        }

        this.data = setSeries(data);

        if (!this.data) {
            this.data = {};
        }

        this.setState({
            loading: false,
            error: false,
            viewport: cornerstone.getViewport(element),
            stack: this.data.stack,
            imageId: this.data.imageId
        });

        $(element).on('CornerstoneImageRendered', () => {
            this.onImageRendered();
        });
    }

    componentWillUnmount() {
        var element = this.refs.element;

        // Try to stop any currently playing clips
        // Otherwise the interval will continuously throw errors
        try {
            var enabledElement = cornerstone.getEnabledElement(element);
            if (enabledElement) {
                cornerstoneTools.stopClip(element);
            }
        } catch(error) {
            console.warn(error);
        }

        // Disable the viewport element with Cornerstone
        // This also triggers the removal of the element from all available
        // synchronizers, such as the one used for reference lines.
        cornerstone.disable(element);
    }

    handleClick(event) {
        console.log('Viewport HandleClick');
    }

    returnFalse(event) {
        event.stopPropagation();
        event.preventDefault();
    }

    render() {
        var loadingOrError;
        if (this.state.error) {
            loadingOrError = <ViewportErrorIndicator />;
        } else if (this.state.loading) {
            loadingOrError = <ViewportLoadingIndicator percentComplete={this.state.percentComplete}/>;
        }

        var instructionsIfEmpty;
        if (!this.props.studyInstanceUid ||
            !this.props.seriesInstanceUid) {
            instructionsIfEmpty = (<div className='viewportInstructions'>
                                        Please drag a stack here to view images.
                                    </div>);
        }

        var image;
        var imageId;
        if (this.data && this.data.imageId) {
            imageId = this.data.imageId;

            var enabledElement = cornerstone.getEnabledElement(this.refs.element);
            image = enabledElement.image;
        }

        var viewport;
        var rotation;
        if (this.state &&
            this.state.viewport) {
            viewport = this.state.viewport;
            rotation = this.state.viewport.rotation;
        }

        // Show or hide the image scrollbar depending
        // on the number of images in the stack
        var maybeImageControls;

        if (this.state &&
            this.state.stack) {
            var stack = this.state.stack;

            if (stack.imageIds.length > 1) {
                // Update the maximum and current value of the slider
                maybeImageControls = <ImageControls
                    max={stack.imageIds.length}
                    value={stack.currentImageIdIndex + 1}
                />;
            }
        }

        return (
            <div className="viewportContainer"
                 style={this.props.containerStyle}>
                <div ref="element"
                     className='imageViewerViewport'
                     unselectable='on'
                     onContextMenu={this.returnFalse}
                     onSelectStart={this.returnFalse}
                     onMouseDown={this.returnFalse}
                     tabIndex='0'
                     onClick={this.handleClick}
                     style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                     }}>
                </div>
                {instructionsIfEmpty}
                {loadingOrError}
                {maybeImageControls}
                <ViewportOverlay
                    imageId={imageId}
                    viewport={viewport}
                    image={image}
                    controlsShown={!!maybeImageControls}/>
                <ViewportOrientationMarkers
                    imageId={imageId}
                    rotation={rotation}/>
            </div>
        )
    }
}

Viewport.propTypes = {
    currentImageIdIndex: React.PropTypes.number.isRequired,
    studyInstanceUid: React.PropTypes.string,
    seriesInstanceUid: React.PropTypes.string,
    sopInstanceUid: React.PropTypes.string,
    viewport: React.PropTypes.object,
    containerStyle: React.PropTypes.object
};

Viewport.defaultProps = {
    currentImageIdIndex: 0
};