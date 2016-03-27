var loadHandlerTimeout;

function startLoadingHandler(element) {
    clearTimeout(loadHandlerTimeout);
    loadHandlerTimeout = setTimeout(function() {
        var elem = $(element);
        elem.siblings('.imageViewerErrorLoadingIndicator').css('display', 'none');
        elem.find('canvas').not('.magnifyTool').addClass('faded');
        elem.siblings('.imageViewerLoadingIndicator').css('display', 'block');
    }, OHIF.viewer.loadIndicatorDelay);
}

function doneLoadingHandler(element) {
    clearTimeout(loadHandlerTimeout);
    var elem = $(element);
    elem.siblings('.imageViewerErrorLoadingIndicator').css('display', 'none');
    elem.find('canvas').not('.magnifyTool').removeClass('faded');
    elem.siblings('.imageViewerLoadingIndicator').css('display', 'none');
};

function errorLoadingHandler(element, imageId, error, source) {
    clearTimeout(loadHandlerTimeout);
    var elem = $(element);

    // Could probably chain all of these, but this is more readable
    elem.find('canvas').not('.magnifyTool').removeClass('faded');
    elem.siblings('.imageViewerLoadingIndicator').css('display', 'none');

    // Don't display errors from the stackPrefetch tool
    if (source === 'stackPrefetch') {
        return;
    }

    var errorLoadingIndicator = elem.siblings('.imageViewerErrorLoadingIndicator');
    errorLoadingIndicator.css('display', 'block');

    var cleanedImageId = imageId;

    // This is just used to expand upon some error messages that are sent
    // when things fail. An example is a network error throwing the error
    // which is only described as 'network'.
    var errorDetails = {
        network: 'A network error has occurred'
        // We need to expand this further when we see more obscure error messages
    };

    if (errorDetails.hasOwnProperty(error)) {
        error = errorDetails[error];
    }

    errorLoadingIndicator.find('.description').text('An error has occurred while loading image: ' + cleanedImageId);
    if (error) {
        errorLoadingIndicator.find('.details').text('Details: ' + error);
    }
}

/*Template.loadingIndicator.helpers({
    'percentComplete': function(e) {
        var percentComplete = Session.get('CornerstoneLoadProgress' + this.viewportIndex);
        if (percentComplete && percentComplete !== 100) {
            return percentComplete + '%';
        }
    }
});*/

import React, { Component } from 'react';

export default class ViewportLoadingIndicator extends Component {
    render() {
        return (
            <div className="loadingIndicator">
                <p>Loading {this.props.percentComplete}</p>
            </div>
        );
    }
}

ViewportLoadingIndicator.propTypes = {
    percentComplete: React.PropTypes.number
};