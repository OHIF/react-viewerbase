import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ViewportLoadingIndicator from '../viewer/ViewportLoadingIndicator';
import ViewportErrorIndicator from '../viewer/ViewportErrorIndicator';
import './ImageThumbnail.styl';

export default class ImageThumbnail extends Component {
  static propTypes = {
    imageSrc: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    width: PropTypes.number,
    height: PropTypes.number.isRequired,
    stackPercentComplete: PropTypes.number
  };

  static defaultProps = {
    loading: false,
    error: false,
    stackPercentComplete: undefined,
    width: undefined,
    height: 123
  };

  render() {
    let loadingOrError;
    if (this.props.error) {
      loadingOrError = <ViewportErrorIndicator />;
    } else if (this.props.loading || !this.props.imageSrc) {
      loadingOrError = <ViewportLoadingIndicator />;
    }

    const showStackLoadingProgressBar =
      this.props.stackPercentComplete !== undefined;

    return (
      <div className="ImageThumbnail">
        <div className="image-thumbnail-canvas">
          <img
            className="static-image"
            src={this.props.imageSrc}
            width={this.props.width}
            height={this.props.height}
            alt={''}
          />
        </div>
        {loadingOrError}
        {showStackLoadingProgressBar && (
          <div className="image-thumbnail-progress-bar">
            <div
              className="image-thumbnail-progress-bar-inner"
              style={{ width: `${this.props.stackPercentComplete}%` }}
            />
          </div>
        )}
      </div>
    );
  }
}
