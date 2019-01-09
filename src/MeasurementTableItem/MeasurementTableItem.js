import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import TableListItem from '../TableListItem/TableListItem.js';

import './MeasurementTableItem.styl';

class MeasurementTableItem extends Component {
  render() {
    return (
      <TableListItem
        itemKey
        itemClass="measurementItem"
        itemIndex={this.props.itemIndex}
      >
        <div>
          <div className="measurementLocation">
            {this.props.measurenmentData.additionalData}
          </div>
          <div>{this.props.measurenmentData.displayData}</div>
          <div className="controlButtons">
            <button onClick={this.props.onRelabel}>Relabel</button>
            <button onClick={this.props.onDelete}>Delete</button>
          </div>
        </div>
      </TableListItem>
    );
  }
}

MeasurementTableItem.propTypes = {
  measurementData: PropTypes.object.isRequired,
  onRelabel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default MeasurementTableItem;
