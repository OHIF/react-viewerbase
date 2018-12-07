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


export default class LayoutChooser extends Component {
    static defaultProps = {
        rows: 4,
        columns: 4,
        visible: false,
    }

    static propTypes = {
        rows: PropTypes.number.isRequired,
        columns: PropTypes.number.isRequired,
        visible: PropTypes.bool.isRequired
    }

    render() {
        var rows = this.props.rows;
        var columns = this.props.columns;
        const style = {
            display: this.props.visible ? 'block' : 'none'
        };

        return (
            <div className="LayoutChooser pull-left dropdown-menu" role="menu" style={style}>
                <table>
                    <tbody>
                    {[...Array(rows)].map(function(row, i) {
                        return (
                            <tr key={i}>
                                {[...Array(columns)].map(function(column, j) {
                                    return <td style={{width: '20px',
                                                       height: '20px',
                                                       border: 'solid 1px black'
                                                       }}
                                               key={j}></td>;
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

