import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PlayClipButton extends Component {
  render() {
    let playClass = 'fa-stop';
    if (this.props.isPlaying) {
      playClass = 'fa-play';
    }
    return (
      <div className="btn-group">
        <button
          id="playClip"
          type="button"
          className="imageViewerCommand btn btn-sm btn-default"
          data-container="body"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Play/Stop Clip"
        >
          <span className={`fa ${playClass}`} />
        </button>
        <button
          id="toggleCineDialog"
          type="button"
          className="imageViewerCommand btn btn-sm btn-default"
          data-container="body"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Toggle CINE Dialog"
        >
          <span className="fa fa-youtube-play" />
        </button>
      </div>
    );
  }
}

PlayClipButton.propTypes = {
  isPlaying: PropTypes.bool.isRequired
};

PlayClipButton.defaultProps = {
  isPlaying: false
};

export default PlayClipButton;
