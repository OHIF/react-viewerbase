import React, { Component } from 'react';
import { DragLayer } from 'react-dnd';
import PropTypes from 'prop-types';
import { ThumbnailEntry } from './ThumbnailEntry';
import './DragPreview.styl';

function collect(monitor) {
  const item = monitor.getItem();
  let newItem = {};
  if (item) {
    newItem = {
      active: item.active,
      altImageText: item.altImageText,
      id: item.id,
      imageSrc: item.imageSrc,
      imageId: item.imageId,
      instanceNumber: item.instanceNumber,
      error: item.error,
      numImageFrames: item.numImageFrames,
      seriesDescription: item.seriesDescription,
      seriesNumber: item.seriesNumber,
      stackPercentComplete: item.stackPercentComplete,
    };
  }
  return {
    ...newItem,
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  };
}

class DragPreview extends Component {
  getLayerStyles(currentOffset) {
    if (!currentOffset) {
      return {
        display: 'none',
      };
    }

    const x = currentOffset.x;
    const y = currentOffset.y;
    const transform = `translate(${x}px, ${y}px)`;

    return {
      pointerEvents: 'none',
      transform: transform,
      WebkitTransform: transform,
    };
  }

  render() {
    const { currentOffset, isDragging } = this.props;
    if (!isDragging) {
      return <div />;
    }

    return (
      <div className="DragPreview">
        <div
          className="source-preview"
          style={this.getLayerStyles(currentOffset)}
        >
          <ThumbnailEntry {...this.props} />
        </div>
      </div>
    );
  }
}

DragPreview.propTypes = {
  isDragging: PropTypes.bool,
  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
};

export default DragLayer(collect)(DragPreview);
