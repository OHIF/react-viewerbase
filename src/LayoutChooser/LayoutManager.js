import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class LayoutManager extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let rows = Array.from(new Array(this.props.rows + 1), (row, i) => i);
    let columns = Array.from(new Array(this.props.columns + 1), (col, i) => i);

    return (
      <table className={this.props.className}>
        <tbody>
          {rows.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => {
                  return <td key={colIndex}>{this.props.children}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
LayoutManager.defaultProps = {
  columns: 1,
  rows: 1,
  className: 'GridLayout'
};
LayoutManager.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired
};

export default LayoutManager;
