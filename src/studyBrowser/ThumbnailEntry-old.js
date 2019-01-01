import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageThumbnail from './ImageThumbnail';
import './ThumbnailEntry.styl';
import styleProperty from '../utils/styleProperty.js';
import classnames from 'classnames';

// Force to hardware acceleration to move element
// if browser supports translate property
const supportsTransform = styleProperty.check(
  'transform',
  'translate(1px, 1px)'
);

console.log(`ThumbnailEntry: Supports CSS Transform ${supportsTransform}`);

const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend'];

function getOffset(element) {
  const rect = element.getBoundingClientRect();

  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };
}

class ThumbnailEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diff: {
        x: 0,
        y: 0
      },
      startPosition: {},
      translateElement: {
        x: 0,
        y: 0
      },
      dragging: false,
      elementTopLeft: {}
    };

    this.dragStartHandler = this.dragStartHandler.bind(this);
    this.dragHandler = this.dragHandler.bind(this);
    this.dragEndHandler = this.dragEndHandler.bind(this);

    this.element = React.createRef();
  }

  static defaultProps = {
    imageSrc: '',
    active: false,
    supportsDragAndDrop: false,
    loading: false,
    error: false,
    stackPercentComplete: undefined,
    onThumbnailDrag: event => {
      const elemBelow = ThumbnailEntry.getDropElement(event);
      console.log(elemBelow);
    },
    onThumbnailDrop: event => {
      const elemBelow = ThumbnailEntry.getDropElement(event);
      console.log('onThumbnailDrop', elemBelow);
    }
  };

  static getCursorPosition(event) {
    if (TOUCH_EVENTS.includes(event.type)) {
      return {
        x: event.changedTouches[0].pageX,
        y: event.changedTouches[0].pageY
      };
    }

    return {
      x: event.pageX,
      y: event.pageY
    };
  }

  static getDropElement(event) {
    // Get the touch/mouse coordinates from the event
    const cursor = ThumbnailEntry.getCursorPosition(event);

    // Note: We need to convert to the viewport coordinate system
    // since document.elementFromPoint does not take page coordinates.
    const viewportPoint = {
      x: cursor.x - window.pageXOffset,
      y: cursor.y - window.pageYOffset
    };

    // Identify the element below the current cursor position
    return document.elementFromPoint(viewportPoint.x, viewportPoint.y);
  }

  static propTypes = {
    imageSrc: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    supportsDragAndDrop: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
    stackPercentComplete: PropTypes.number,
    seriesDescription: PropTypes.string,
    seriesNumber: PropTypes.number,
    instanceNumber: PropTypes.number,
    numImageFrames: PropTypes.number,
    onDoubleClick: PropTypes.func,
    onClick: PropTypes.func,
    onThumbnailDrag: PropTypes.func
  };

  componentDidMount() {
    const node = this.element.current;
    // Note: There is no other way to add non-passive event listeners yet.
    // See https://github.com/facebook/react/issues/6436
    node.addEventListener('touchstart', this.onTouchStart, { passive: false });
  }
  componentWillUnmount() {
    const node = this.element.current;
    node.removeEventListener('touchstart', this.onTouchStart);
  }
  render() {
    const hasInstanceNumber = this.props.instanceNumber !== undefined;

    let className = classnames(
      'ThumbnailEntry noselect',
      { active: this.props.active },
      { draggable: this.props.supportsDragAndDrop }
    );
    const infoOnly = false;
    let draggableStyle;
    if (supportsTransform) {
      draggableStyle = {
        transform: `translate(${this.state.translateElement.x}px, ${
          this.state.translateElement.y
        }px)`,
        top: `${this.state.elementTopLeft.y}px`,
        left: `${this.state.elementTopLeft.x}px`,
        position: 'fixed',
        margin: '0 !important'
      };
    } else {
      draggableStyle = {
        top: `${this.state.elementTopLeft.y}px`,
        left: `${this.state.elementTopLeft.x}px`,
        position: 'fixed',
        margin: '0 !important'
      };
    }

    console.log(draggableStyle);

    return (
      <>
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
        {this.state.dragging && (
          <div
            className="ThumbnailEntry noselect image-thumbnail-clone"
            style={draggableStyle}
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
              className={
                infoOnly ? 'series-details info-only' : 'series-details'
              }
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
        )}
      </>
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

  onMouseDown = event => {
    if (this.props.supportsDragAndDrop) {
      this.dragStartHandler(event);
    }

    // Stop text selection
    event.preventDefault();
  };

  dragHandler(event) {
    const cursor = ThumbnailEntry.getCursorPosition(event);

    if (supportsTransform) {
      this.setState({
        translateElement: {
          x: cursor.x - this.state.startPosition.x,
          y: cursor.y - this.state.startPosition.y
        }
      });
    } else {
      this.setState({
        elementTopLeft: {
          x: cursor.x - this.state.diff.x,
          y: cursor.y - this.state.diff.y
        }
      });
    }

    this.props.onThumbnailDrag(event);

    // Prevent default to stop grab-scrolling page on touch devices
    event.preventDefault();
  }

  dragStartHandler(event) {
    const targetThumbnail = event.currentTarget;
    const cursor = ThumbnailEntry.getCursorPosition(event);

    // Hook up event handlers for mouse events
    if (event.type === 'mousedown') {
      document.addEventListener('mousemove', this.dragHandler);
      document.addEventListener('mouseup', this.dragEndHandler);
    } else if (event.type === 'touchstart') {
      // Mark the event handler as not passive so we can use preventDefault
      document.addEventListener('touchmove', this.dragHandler, {
        passive: false
      });
      document.addEventListener('touchend', this.dragEndHandler, {
        passive: false
      });
    }

    // This block gets the current offset of the touch/mouse
    // relative to the window
    //
    // i.e. Where did the user grab it from?
    const offset = getOffset(targetThumbnail);
    const { left, top } = offset;

    // This difference is saved for later so the element movement looks normal
    let diff = {
      x: cursor.x - left,
      y: cursor.y - top
    };

    // This sets the default style properties of the cloned element so it is
    // ready to be dragged around the page
    if (supportsTransform) {
      this.setState({
        startPosition: {
          x: cursor.x,
          y: cursor.y
        },
        diff,
        dragging: true,
        elementTopLeft: {
          x: left,
          y: top
        }
      });
    } else {
      this.setState({
        startPosition: {
          x: cursor.x,
          y: cursor.y
        },
        diff,
        dragging: true,
        elementTopLeft: {
          x: cursor.x - diff.x,
          y: cursor.y - diff.y
        }
      });
    }
  }

  dragEndHandler(event) {
    this.setState({
      diff: {
        x: 0,
        y: 0
      },
      startPosition: {},
      translateElement: {
        x: 0,
        y: 0
      },
      dragging: false,
      elementTopLeft: {
        x: 0,
        y: 0
      }
    });

    document.removeEventListener('mousemove', this.dragHandler);
    document.removeEventListener('mouseup', this.dragEndHandler);

    document.removeEventListener('touchmove', this.dragHandler);
    document.removeEventListener('touchend', this.dragEndHandler);

    const data = {
      seriesDescription: this.props.seriesDescription,
      seriesNumber: this.props.seriesNumber,
      instanceNumber: this.props.instanceNumber,
      numImageFrames: this.props.numImageFrames
    };

    this.props.onThumbnailDrop(event, data);
  }

  onTouchStart = event => {
    if (this.props.supportsDragAndDrop) {
      this.dragStartHandler(event);
    }

    // Prevent default to stop grab-scrolling page on touch devices
    event.preventDefault();
  };
}

export default ThumbnailEntry;
