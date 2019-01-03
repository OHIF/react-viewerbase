import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LayoutManager.css';
import LayoutPanelDropTarget from './LayoutPanelDropTarget.js';

export class LayoutManager extends Component {
  static defaultProps = {
    columns: 1,
    rows: 1,
    className: 'GridLayout',
    viewportData: [],
    supportsDragAndDrop: true,
    setViewportData: ({ viewportIndex, item }) => {
      console.log({ viewportIndex, item });
    }
  };

  static propTypes = {
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
    viewportData: PropTypes.array.isRequired,
    supportsDragAndDrop: PropTypes.bool.isRequired,
    setViewportData: PropTypes.func
  };

  onDrop = ({ viewportIndex, item }) => {
    if (this.props.setViewportData) {
      this.props.setViewportData({ viewportIndex, item });
    }
  };

  render() {
    if (!this.props.viewportData.length) {
      return '';
    }

    const viewportElements = this.props.viewportData.map(
      (viewportComponent, viewportIndex) => {
        const style = {
          height: `${100 / this.props.rows}%`,
          width: `${100 / this.props.columns}%`
        };

        let content;
        if (this.props.supportsDragAndDrop) {
          content = (
            <LayoutPanelDropTarget
              onDrop={this.onDrop}
              viewportIndex={viewportIndex}
              viewportComponent={viewportComponent}
            />
          );
        } else {
          content = <div className="LayoutPanel">{viewportComponent}</div>;
        }

        return (
          <div key={viewportIndex} className="viewport-container" style={style}>
            {content}
          </div>
        );
      }
    );

    return <div className={this.props.className}>{viewportElements}</div>;
  }
}

export default LayoutManager;
