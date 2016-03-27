import React, { Component } from 'react';
import Viewport from './Viewport';

export default class GridLayout extends Component {
    getContainerStyle() {
        return {
            width: 100 / this.props.columns + "%",
            height: 100 / this.props.rows + "%"
        };
    }

    getViewports() {
        var numViewports = this.props.rows * this.props.columns;
        var viewportData = this.props.viewportData;
        var numViewportsWithData = this.props.viewportData.length;

        var self = this;
        if (numViewportsWithData < numViewports) {
            var difference = numViewports - numViewportsWithData;
            for (var i = 0; i < difference; i++) {
                viewportData.push({
                    viewportIndex: numViewportsWithData + i + 1,
                    rows: self.props.rows,
                    columns: self.props.columns
                });
            }
        } else if (numViewportsWithData > numViewports) {
            return viewportData.slice(0, numViewports);
        }

        return viewportData;
    }

    render() {
        var viewports = this.getViewports();
        return (
            <div id='imageViewerViewports'>
                {viewports.map((viewport, i) => {
                    return (
                        <div key={i} className="viewportContainer" style={this.getContainerStyle()}>
                            <Viewport viewportData={viewport}/>
                        </div>
                    );
                })}
            </div>
        )
    }
}

GridLayout.propTypes = {
    rows: React.PropTypes.number.isRequired,
    columns: React.PropTypes.number.isRequired,
    viewportData: React.PropTypes.array.isRequired
};

GridLayout.defaultProps = {
    rows: 1,
    columns: 1,
    viewportData: []
};