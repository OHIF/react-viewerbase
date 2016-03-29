function getElementIfNotEmpty(viewportIndex) {
    // Meteor template helpers run more often than expected
    // They often seem to run just before the whole template is rendered
    // This meant that the onRendered event hadn't fired yet, so the
    // element wasn't enabled / set empty yet. The check here
    // for canvases under the 'enabled' element div is to prevent
    // 'undefined' errors from the helper functions

    var imageViewerViewports = $('.imageViewerViewport'),
        element = imageViewerViewports.get(viewportIndex),
        canvases = imageViewerViewports.eq(viewportIndex).find('canvas');

    if (!element || $(element).hasClass('empty') || canvases.length === 0) {
        return;
    }

    // Check to make sure the element is enabled.
    try {
        var enabledElement = cornerstone.getEnabledElement(element);
    } catch(error) {
        return;
    }

    return element;
}

function getPatient(property) {
    //Session.get('CornerstoneNewImage' + this.viewportIndex);
    if (!this.imageId) {
        return false;
    }

    var patient = cornerstoneTools.metaData.get('patient', this.imageId);
    if (!patient) {
        return '';
    }

    return patient[property];
}

function getStudy(property) {
    //Session.get('CornerstoneNewImage' + this.viewportIndex);
    if (!this.imageId) {
        return false;
    }

    var study = cornerstoneTools.metaData.get('study', this.imageId);
    if (!study) {
        return '';
    }

    return study[property];
}

function getSeries(property) {
    //Session.get('CornerstoneNewImage' + this.viewportIndex);
    if (!this.imageId) {
        return false;
    }

    var series = cornerstoneTools.metaData.get('series', this.imageId);
    if (!series) {
        return '';
    }

    return series[property];
}

function getInstance(property) {
    //Session.get('CornerstoneNewImage' + this.viewportIndex);
    if (!this.imageId) {
        return false;
    }

    var instance = cornerstoneTools.metaData.get('instance', this.imageId);
    if (!instance) {
        return '';
    }

    return instance[property];
}

/*Template.viewportOverlay.helpers({
    prior() {
        // This helper is updated whenever a new image is displayed in the viewport
        //Session.get('CornerstoneNewImage' + this.viewportIndex);
        if (!this.imageId) {
            return;
        }

        // Make sure there are more than two studies loaded in the viewer
        //
        // Here we sort the collection in ascending order by study date, so
        // that we can obtain the oldest study as the first element of the array
        //
        // TODO= Find out if we should encode studyDate as a Date in the ViewerStudies Collection
        var viewportStudies = ViewerStudies.find({}, {
            sort: {
                studyDate: 1
            }
        });
        if (viewportStudies.count() < 2) {
            return;
        }

        // Get study data
        var study = cornerstoneTools.metaData.get('study', this.imageId);
        if (study.studyDate === viewportStudies.fetch()[0].studyDate) {
            return 'Prior';
        }
    }
});*/

import React, { Component } from 'react';

export default class ViewportOverlay extends Component {
    wwwc() {
        var viewport = this.props.viewport;
        if (!viewport) {
            return;
        }
        
        return 'W ' + viewport.voi.windowWidth.toFixed(0) + ' L ' + viewport.voi.windowCenter.toFixed(0);
    }

    zoom() {
        var viewport = this.props.viewport;
        if (!viewport) {
            return;
        }

        return (viewport.scale * 100.0).toFixed(2);
    }

    imageDimensions() {
        var image = this.props.image;
        if (!image) {
            return;
        }

        return image.width + ' x ' + image.height;
    }
    
    patientName() {
        return getPatient.call(this, 'name');
    }

    patientId() {
        return getPatient.call(this, 'id');
    }
    
    studyDate() {
        return getStudy.call(this, 'studyDate');
    }

    studyTime() {
        return getStudy.call(this, 'studyTime');
    }

    studyDescription() {
        return getStudy.call(this, 'studyDescription');
    }

    seriesDescription() {
        return getSeries.call(this, 'seriesDescription');
    }

    frameRate() {
        var frameTime = getInstance.call(this, 'frameTime');
        if (!frameTime) {
            return;
        }

        var frameRate = 1000 / frameTime;
        return frameRate.toFixed(1);
    }

    compression() {
        return '';
    }

    seriesNumber() {
        return getSeries.call(this, 'seriesNumber');
    }

    imageNumber() {
        return getInstance.call(this, 'instanceNumber');
    }

    imageIndex() {
        return getInstance.call(this, 'index');
    }

    numImages() {
        return getSeries.call(this, 'numImages');
    }

    render() {
        var ifFramerate;
        if (this.frameRate()) {
            ifFramerate = this.frameRate() + " FPS";
        }

        return (
            <div className="imageViewerViewportOverlay noselect">
                <div className="topleft dicomTag"
                     style={{position: 'absolute',
                             top: '3px',
                             left: '3px',
                             color: 'white',
                             pointerEvents: 'none'
                            }}>
                    <div>{this.patientName}</div>
                    <div>{this.patientId}</div>
                    <div className='priorIndicator'>{this.prior}</div>
                </div>
                <div className="topright dicomTag"
                     style={{position: 'absolute',
                             top: '3px',
                             right: '3px',
                             color: 'white',
                             pointerEvents: 'none'
                            }}>
                    <div>{this.studyDescription()}</div>
                    <div>{this.studyDate()} {this.studyTime()}</div>
                </div>
                <div className="bottomright dicomTag"
                     style={{position: 'absolute',
                             bottom: '3px',
                             right: '3px',
                             color: 'white',
                             pointerEvents: 'none'
                            }}>
                    <div>Zoom: {this.zoom()}%</div>
                    <div>{this.compression()}</div>
                    <div>{this.wwwc()}</div>
                </div>
                <div className="bottomleft dicomTag"
                     style={{position: 'absolute',
                             bottom: '3px',
                             left: '3px',
                             color: 'white',
                             pointerEvents: 'none'
                            }}>
                    <div>Ser: {this.seriesNumber()}</div>
                    <div>Img: {this.imageNumber()} ({this.imageIndex()}/{this.numImages()})</div>
                    <div>{ifFramerate}</div>
                    <div>{this.imageDimensions()}</div>
                    <div>{this.seriesDescription()}</div>
                </div>
            </div>
        )
    }
}