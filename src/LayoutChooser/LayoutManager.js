import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LayoutManager.css';
import LayoutPanelDropTarget from './LayoutPanelDropTarget.js';

export class LayoutManager extends Component {
  static className = 'LayoutManager';
  static defaultProps = {
    viewportData: [],
    layout: {
      viewports: [
        {
          top: 0,
          left: 0,
          height: '100%',
          width: '100%'
        }
      ]
    },
    activeViewportIndex: 0,
    supportsDragAndDrop: true,
    setViewportData: ({ viewportIndex, item }) => {
      //console.log({ viewportIndex, item });
    }
  };

  static propTypes = {
    viewportData: PropTypes.array.isRequired,
    supportsDragAndDrop: PropTypes.bool.isRequired,
    activeViewportIndex: PropTypes.number.isRequired,
    setViewportData: PropTypes.func,
    layout: PropTypes.object
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

    const viewportElements = [];
    const numViewports = this.props.layout.viewports.length;
    for (let i = 0; i < numViewports; i++) {
      const data = this.props.viewportData[i];
      const layout = this.props.layout.viewports[i];

      const style = {
        ...layout
      };

      let content;
      if (this.props.supportsDragAndDrop) {
        content = (
          <LayoutPanelDropTarget
            onDrop={this.onDrop}
            viewportIndex={i}
            viewportComponent={data}
          />
        );
      } else {
        content = <div className="LayoutPanel">{data}</div>;
      }

      let className = 'viewport-container';

      if (this.props.activeViewportIndex === i) {
        className += ' active';
      }

      viewportElements.push(
        <div key={i} className={className} style={style}>
          {content}
        </div>
      );
    }

    return <div className={LayoutManager.className}>{viewportElements}</div>;
  }
}

export default LayoutManager;
