import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LayoutManager.css';

export class LayoutManager extends Component {
  static defaultProps = {
    columns: 1,
    rows: 1,
    className: 'GridLayout',
    viewportData: []
  };

  static propTypes = {
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
    viewportData: PropTypes.array.isRequired
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

        return (
          <div key={viewportIndex} className="viewport-container" style={style}>
            {viewportComponent}
          </div>
        );
      }
    );

    return <div className={this.props.className}>{viewportElements}</div>;
  }
}

export default LayoutManager;
