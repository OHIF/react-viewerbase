/*toggleCinePlay = function() {
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
        return ;
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
});*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CineDialog extends Component {
  render() {
    /*var playClass = 'fa-play';
        if (isPlaying()) {
            playClass = 'fa-pause';
        }*/

    var frameRate = this.props.frameRate.toFixed(1);

    return (
      <div id="cineDialog">
        <h5>Cine Controls</h5>
        <div id="cineButtons">
          <button
            id="cineFirstButton"
            title="Skip to first image"
            className="cineButton"
            data-toggle="tooltip"
          >
            <i className="fa fa-lg fa-fast-backward" />
          </button>
          <button
            id="cineBackButton"
            title="Previous image"
            className="cineButton"
            data-toggle="tooltip"
          >
            <i className="fa fa-lg fa-step-backward" />
          </button>
          <button
            id="cineSlowPlaybackButton"
            title="Slow playback"
            className="cineButton"
            data-toggle="tooltip"
          >
            <i className="fa fa-lg fa-backward" />
          </button>
          <button
            id="cinePlayButton"
            title="Play / Pause"
            className="cineButton"
            data-toggle="tooltip"
          >
            <i className="fa fa-lg {playClass}" />
          </button>
          <button
            id="cineFastForwardButton"
            title="Increase playback speed"
            className="cineButton"
            data-toggle="tooltip"
          >
            <i className="fa fa-lg fa-forward" />
          </button>
          <button
            id="cineNextButton"
            title="Next image"
            className="cineButton"
            data-toggle="tooltip"
          >
            <i className="fa fa-lg fa-step-forward" />
          </button>
          <button
            id="cineLastButton"
            title="Skip to last image"
            className="cineButton"
            data-toggle="tooltip"
          >
            <i className="fa fa-lg fa-fast-forward" />
          </button>
        </div>
        <div id="cineOptions">
          <div id="loopSection">
            <label>Loop?</label>
            <input type="checkbox" checked id="cineLoopCheckbox" />
          </div>
          <div id="fpsSection">
            <label>
              Cine Speed: <span id="fps">{frameRate}</span>
            </label>
            <input
              type="range"
              id="cineSlider"
              min="1"
              max="90"
              value="{{framerate}}"
            />
          </div>
        </div>
      </div>
    );
  }
}

CineDialog.propTypes = {
  frameRate: PropTypes.number.isRequired
};

CineDialog.defaultProps = {
  frameRate: 24
};
