import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import ThumbnailEntry from './ThumbnailEntry.js';
import PropTypes from 'prop-types';

// Drag sources and drop targets only interact
// if they have the same string type.
const Types = {
  THUMBNAIL: 'thumbnail'
};

const thumbnailSource = {
  /*canDrag(props) {
    return props.error === false;
  },*/

  beginDrag(props) {
    console.log('beginDrag');
    console.log(props);

    return props;
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      console.log(`You dropped ${item.id} into ${dropResult.id}!`);
    }
  }
};

class ThumbnailEntryDragSource extends Component {
  render() {
    const { isDragging, connectDragSource } = this.props;

    return connectDragSource(
      <div className="ThumbnailEntryContainer">
        <ThumbnailEntry {...this.props} />
      </div>
    );
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

export default DragSource(Types.THUMBNAIL, thumbnailSource, collect)(
  ThumbnailEntryDragSource
);
