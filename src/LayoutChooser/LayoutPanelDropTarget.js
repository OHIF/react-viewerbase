import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import './LayoutPanelDropTarget.css';

// Drag sources and drop targets only interact
// if they have the same string type.
const Types = {
  THUMBNAIL: 'thumbnail'
};

const divTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();

    if (props.onDrop) {
      props.onDrop({
        viewportIndex: props.viewportIndex,
        item
      });
    }

    return {
      id: `LayoutPanelDropTarget-${props.viewportIndex}`,
      viewportIndex: props.viewportIndex,
      item
    };
  }
};

// TODO: Find out why we can't move this into the Example app instead.
// It looks like the context isn't properly shared.
class LayoutPanelDropTarget extends Component {
  static className = 'LayoutPanelDropTarget';

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let className = LayoutPanelDropTarget.className;

    if (isActive) {
      className += ' hovered';
    } else if (canDrop) {
      className += ' can-drop';
    }

    return connectDropTarget(
      <div className={className}>{this.props.viewportComponent}</div>
    );
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
});

export default DropTarget(Types.THUMBNAIL, divTarget, collect)(
  LayoutPanelDropTarget
);
