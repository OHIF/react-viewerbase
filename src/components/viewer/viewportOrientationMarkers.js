/**
 * Updates the orientation labels on a Cornerstone-enabled Viewport element
 * when the viewport settings change (e.g. when a horizontal flip or a rotation occurs)
 *
 * @param element The DOM element of the Cornerstone viewport
 */

import React, { Component } from 'react';

export default class ViewportOrientationMarkers extends Component {
    constructor(props) {
        super(props);

        this.data = {};
    }

    componentDidMount() {
        var rotation = this.props.rotation;

        var imagePlane = cornerstoneTools.metaData.get('imagePlane', this.props.imageId);
        if (!imagePlane || !imagePlane.rowCosines || !imagePlane.columnCosines) {
            return;
        }

        var rowString = cornerstoneTools.orientation.getOrientationString(imagePlane.rowCosines);
        var columnString = cornerstoneTools.orientation.getOrientationString(imagePlane.columnCosines);
        var oppositeRowString = cornerstoneTools.orientation.invertOrientationString(rowString);
        var oppositeColumnString = cornerstoneTools.orientation.invertOrientationString(columnString);

        this.data = {
            top: oppositeColumnString,
            left: oppositeRowString
        };

        // If any vertical or horizontal flips are applied, change the orientation strings ahead of
        // the rotation applications
        if (this.props.vflip) {
            this.data.top = cornerstoneTools.orientation.invertOrientationString(this.data.top);
        }

        if (this.props.hflip) {
            this.data.left = cornerstoneTools.orientation.invertOrientationString(this.data.left);
        }

        // Swap the labels accordingly if the viewport has been rotated
        // This could be done in a more complex way for intermediate rotation values (e.g. 45 degrees)
        if (rotation === 90 || rotation === -270) {
            this.data.top = this.data.left;
            this.data.left = cornerstoneTools.orientation.invertOrientationString(this.data.top);
        } else if (rotation === -90 || rotation === 270) {
            this.data.top = cornerstoneTools.orientation.invertOrientationString(this.data.left);
            this.data.left = this.data.top;
        } else if (rotation === 180 || rotation === -180) {
            this.data.top = cornerstoneTools.orientation.invertOrientationString(this.data.top);
            this.data.left = cornerstoneTools.orientation.invertOrientationString(this.data.left);
        }
    }

    render() {
        return (
            <div className="viewportOrientationMarkers noselect">
                <div className="topMid orientationMarker">
                    {this.data.top}
                </div>
                <div className="leftMid orientationMarker">
                    {this.data.left}
                </div>
            </div>
        )
    }
}

ViewportOrientationMarkers.propTypes = {
    imageId: React.PropTypes.string,
    hflip: React.PropTypes.bool.isRequired,
    vflip: React.PropTypes.bool.isRequired,
    rotation: React.PropTypes.number.isRequired
};

ViewportOrientationMarkers.defaultProps = {
    hflip: false,
    vflip: false,
    rotation: 0
};