import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const rows = Array.from(new Array(this.props.rows), (row, i) => i);
    const columns = Array.from(new Array(this.props.columns), (col, i) => i);
    const numColumns = columns.length;

    if (!this.props.viewportData.length) {
      return '';
    }

    return (
      <table className={this.props.className}>
        <tbody>
          {rows.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => {
                  const viewportIndex = rowIndex * numColumns + colIndex;
                  return (
                    <td key={colIndex}>
                      {this.props.viewportData[viewportIndex]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default LayoutManager;
