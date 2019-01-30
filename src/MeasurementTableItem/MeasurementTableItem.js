import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from '../basic/OverlayTrigger.js';
import Tooltip from '../basic/Tooltip.js';

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
    const { warningTitle = '', hasWarnings } = this.props.measurementData;

    return (
      <>
        {hasWarnings ? (
          <OverlayTrigger
            key={this.props.itemIndex}
            placement="left"
            overlay={
              <Tooltip
                placement="left"
                className="in tooltip-warning"
                id="tooltip-left"
              >
                <div className="warningTitle">{warningTitle}</div>
                <div className="warningContent">{this.getWarningContent()}</div>
              </Tooltip>
            }
          >
            <div>{this.getTableListItem()}</div>
          </OverlayTrigger>
        ) : (
          <>{this.getTableListItem()}</>
        )}
      </>
    );
  }

  getTableListItem = () => {
    const hasWarningClass = this.props.measurementData.hasWarnings
      ? 'hasWarnings'
      : '';
    return (
      <TableListItem
        itemKey={this.props.itemKey}
        itemClass={`measurementItem ${this.props.itemClass} ${hasWarningClass}`}
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
  };

  getDataDisplayText = () => {
    return this.props.measurementData.data.map((data, index) => {
      return (
        <div key={`displayText_${index}`} className="measurementDisplayText">
          {data.displayText ? data.displayText : '...'}
        </div>
      );
    });
  };

  getWarningContent = () => {
    const { warningList = '' } = this.props.measurementData;

    if (Array.isArray(warningList)) {
      const listedWarnings = warningList.map((warn, index) => {
        return <li key={index}>{warn}</li>;
      });

      return <ol>{listedWarnings}</ol>;
    } else {
      return <>{warningList}</>;
    }
  };
}
