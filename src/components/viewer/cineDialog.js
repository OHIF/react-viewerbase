toggleCinePlay = function() {
    var element = getActiveViewportElement();
    var playClipToolData = cornerstoneTools.getToolState(element, 'playClip');

    if (isPlaying()) {
        cornerstoneTools.stopClip(element);
    } else {
        cornerstoneTools.playClip(element);
    }
};

function updateFramerate(rate) {
    OHIF.viewer.cine.framesPerSecond = rate;

    // Update playClip toolData for this imageId
    var element = getActiveViewportElement();
    var playClipToolData = cornerstoneTools.getToolState(element, 'playClip');
    playClipToolData.data[0].framesPerSecond = OHIF.viewer.cine.framesPerSecond;

    // If the movie is playing, stop/start to update the framerate
    if (isPlaying()) {
        cornerstoneTools.stopClip(element);
        cornerstoneTools.playClip(element);
    }

    Session.set('UpdateCine', Random.id());
}

Template.cineDialog.helpers({
    isPlaying: function() {
        return isPlaying();
    },
    framerate: function() {
        Session.get('UpdateCine');
        return OHIF.viewer.cine.framesPerSecond.toFixed(1);
    }
});

Template.cineDialog.events({
    'click #cineFirstButton': function() {
        switchToImageByIndex(0);
    },
    'click #cineBackButton': function() {
        switchToImageRelative(-1);
    },
    'click #cineSlowPlaybackButton': function() {
        updateFramerate(OHIF.viewer.cine.framesPerSecond - 1);
    },
    'click #cinePlayButton': function() {
        toggleCinePlay();
    },
    'click #cineNextButton': function() {
        switchToImageRelative(1);
    },
    'click #cineFastForwardButton': function() {
        updateFramerate(OHIF.viewer.cine.framesPerSecond + 1);
    },
    'click #cineLastButton': function() {
        switchToImageByIndex(-1);
    },
    'change #cineLoopCheckbox': function(e) {
        var element = getActiveViewportElement();
        var playClipToolData = cornerstoneTools.getToolState(element, 'playClip');
        playClipToolData.data[0].loop = $(e.currentTarget).is(':checked');
        OHIF.viewer.cine.loop = playClipToolData.data[0].loop;
    },
    'input #cineSlider': function(e) {
        // Update the FPS text onscreen
        var rate = parseFloat($(e.currentTarget).val());
        updateFramerate(rate);
    }
});

Template.cineDialog.onRendered(function() {
    var dialog = $('#cineDialog');
    dialog.draggable();
});

import React, { Component } from 'react';

export default class CineDialog extends Component {
    render() {
        var studies = this.props.studies;
        return (
            <div id="cineDialog">
                <h5>Cine Controls</h5>
                <div id="cineButtons">
                    <a id="cineFirstButton" title="Skip to first image" className="cineButton" data-toggle="tooltip">
                        <i className="fa fa-lg fa-fast-backward"></i>
                    </a>
                    <a id="cineBackButton" title="Previous image" className="cineButton" data-toggle="tooltip">
                        <i className="fa fa-lg fa-step-backward"></i>
                    </a>
                    <a id="cineSlowPlaybackButton" title="Slow playback" className="cineButton" data-toggle="tooltip">
                        <i className="fa fa-lg fa-backward"></i>
                    </a>
                    <a id="cinePlayButton" title="Play / Pause" className="cineButton" data-toggle="tooltip">
                        {{#if isPlaying}}
                        <i className="fa fa-lg fa-pause"></i>
                        {{else}}
                        <i className="fa fa-lg fa-play"></i>
                        {{ /if}}
                    </a>
                    <a id="cineFastForwardButton" title="Increase playback speed" className="cineButton"
                       data-toggle="tooltip">
                        <i className="fa fa-lg fa-forward"></i>
                    </a>
                    <a id="cineNextButton" title="Next image" className="cineButton" data-toggle="tooltip">
                        <i className="fa fa-lg fa-step-forward"></i>
                    </a>
                    <a id="cineLastButton" title="Skip to last image" className="cineButton" data-toggle="tooltip">
                        <i className="fa fa-lg fa-fast-forward"></i>
                    </a>
                </div>
                <div id="cineOptions">
                    <div id="loopSection">
                        <label>Loop?</label>
                        <input type="checkbox" checked id="cineLoopCheckbox"/>
                    </div>
                    <div id="fpsSection">
                        <label>Cine Speed: <span id="fps">{{framerate}}</span></label>
                        <input type="range" id="cineSlider" min="1" max="90" value="{{framerate}}"/>
                    </div>
                </div>
            </div>
        )
    }
}