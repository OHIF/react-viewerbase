import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import TableListItem from '../TableListItem/TableListItem.js';

import './MeasurementTableItem.styl';

export default class MeasurementTableItem extends Component {
  static propTypes = {
    measurementData: PropTypes.object.isRequired,
    onItemClick: PropTypes.func.isRequired,
    onRelabel: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEditDescription: PropTypes.func.isRequired,
    itemKey: PropTypes.string.isRequired,
    itemClass: PropTypes.string,
    itemIndex: PropTypes.number
  };

  render() {
    return (
      <TableListItem
        itemKey={this.props.itemKey}
        itemClass={`measurementItem ${this.props.itemClass}`}
        itemIndex={this.props.itemIndex}
        onItemClick={this.props.onItemClick}
      >
        <div>
          <div className="measurementLocation">
            {this.props.measurementData.label}
          </div>
          <div>{this.getDataDisplayText()}</div>
          <div className="rowActions">
            <button className="btnAction" onClick={this.props.onRelabel}>
              <i className="fa fa-edit" />
              Relabel
            </button>
            <button
              className="btnAction"
              onClick={this.props.onEditDescription}
            >
              <i className="fa fa-edit" />
              Description
            </button>
            <button className="btnAction" onClick={this.props.onDelete}>
              <i className="fa fa-trash-o" />
              Delete
            </button>
          </div>
        </div>
      </TableListItem>
    );
  }

  getDataDisplayText = () => {
    return this.props.measurementData.data.map((data, index) => {
      return (
        <div key={`displayText_${index}`} className="measurementDisplayText">
          {data.displayText ? data.displayText : '...'}
        </div>
      );
    });
  };
}
