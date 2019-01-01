import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageThumbnail from './ImageThumbnail';
import './ThumbnailEntry.styl';
import classnames from 'classnames';

class ThumbnailEntry extends Component {
  constructor(props) {
    super(props);

    console.log('ThumbnailEntry constructor');
    console.log(props);

    this.element = React.createRef();
  }

  static defaultProps = {
    imageSrc: '',
    active: false,
    loading: false,
    error: false,
    stackPercentComplete: undefined
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
    stackPercentComplete: PropTypes.number,
    seriesDescription: PropTypes.string,
    seriesNumber: PropTypes.number,
    instanceNumber: PropTypes.number,
    numImageFrames: PropTypes.number,
    onDoubleClick: PropTypes.func,
    onClick: PropTypes.func
  };

  render() {
    console.log('ThumbnailEntry render');

    const hasInstanceNumber = this.props.instanceNumber !== undefined;

    let className = classnames('ThumbnailEntry noselect', {
      active: this.props.active
    });
    const infoOnly = false;

    return (
      <div
        className={className}
        onClick={this.onClick}
        onDoubleClick={this.onDoubleClick}
        onMouseDown={this.onMouseDown}
        ref={this.element}
      >
        <div className="p-x-1">
          <ImageThumbnail
            imageSrc={this.props.imageSrc}
            loading={this.props.loading}
            error={this.props.error}
            stackPercentComplete={this.props.stackPercentComplete}
          />
        </div>
        <div
          className={infoOnly ? 'series-details info-only' : 'series-details'}
        >
          <div className="series-description">
            {this.props.seriesDescription}
          </div>
          <div className="series-information">
            <div className="item item-series clearfix">
              <div className="icon">S:</div>
              <div className="value">{this.props.seriesNumber}</div>
            </div>
            {hasInstanceNumber && (
              <div className="item item-series clearfix">
                <div className="icon">I:</div>
                <div className="value">{this.props.instanceNumber}</div>
              </div>
            )}
            <div className="item item-frames clearfix">
              <div className="icon">
                <div />
              </div>
              <div className="value">{this.props.numImageFrames}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  onDoubleClick = () => {
    if (this.props.onDoubleClick) {
      this.props.onDoubleClick();
    }
  };
}

export default ThumbnailEntry;
