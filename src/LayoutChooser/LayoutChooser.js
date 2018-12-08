import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Adds the 'hover' class to cells above and to the left of the current cell
 * This is used to "fill in" the grid that the user will change the layout to,
 * if they click on a specific table cell.
 *
 * @param currentCell
 */
/*function highlightCells(currentCell) {
    var cells = $('.layoutChooser table td');
    cells.removeClass('hover');

    currentCell = $(currentCell);
    var table = currentCell.parents('.layoutChooser table').get(0);
    var rowIndex = currentCell.closest('tr').index();
    var columnIndex = currentCell.index();

    // Loop through the table row by row
    // and cell by cell to apply the highlighting
    for (var i = 0; i < table.rows.length; i++) {
        row = table.rows[i];
        if (i <= rowIndex) {
           for (var j = 0; j < row.cells.length; j++) {
                if (j <= columnIndex) {
                    cell = row.cells[j];
                    cell.classList.add('hover');
                }
           }
        }
    }
}*/

/*Template.layoutChooser.events({
    'touchstart .layoutChooser table td, mouseenter .layoutChooser table td': function(evt) {
        highlightCells(evt.currentTarget);
    },
    'click .layoutChooser table td': function(evt) {
        var currentCell = $(evt.currentTarget);
        var rowIndex = currentCell.closest('tr').index();
        var columnIndex = currentCell.index();

        // Add 1 because the indices start from zero
        var layoutProps = {
            rows: rowIndex + 1,
            columns: columnIndex + 1
        };

        layoutManager.layoutTemplateName = 'gridLayout';
        layoutManager.layoutProps = layoutProps;
        layoutManager.updateViewports();
    }
});*/

export class LayoutChooser extends Component {
  static defaultProps = {
    rows: 4,
    columns: 4,
    visible: true,
    boxSize: 20,
    cellBorder: 1
  };
  static propTypes = {
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
    visible: PropTypes.bool.isRequired,
    boxSize: PropTypes.number.isRequired,
    cellBorder: PropTypes.number.isRequired
  };
  render() {
    let rows = this.props.rows;
    let columns = this.props.columns;
    const style = {
      display: this.props.visible ? 'block' : 'none',
      minWidth:
        columns * this.props.boxSize + (columns + 1) * this.props.cellBorder
    };
    return (
      <div
        className="LayoutChooser pull-left dropdown-menu"
        role="menu"
        style={style}
      >
        <table>
          <tbody>
            {[...Array(rows)].map((row, i) => {
              return (
                <tr key={i}>
                  {[...Array(columns)].map((column, j) => {
                    return (
                      <td
                        style={{
                          width: this.props.boxSize,
                          height: this.props.boxSize,
                          border: 'solid 1px black'
                        }}
                        key={j}
                      />
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default LayoutChooser;
