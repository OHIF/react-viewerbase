import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { OverlayTrigger } from './../overlayTrigger';
import { Tooltip } from './../tooltip';
import { TableListItem } from './../tableList/TableListItem.js';

import './MeasurementTableItem.styl';

export class MeasurementTableItem extends Component {
  static propTypes = {
    measurementData: PropTypes.object.isRequired,
    onItemClick: PropTypes.func.isRequired,
    onRelabel: PropTypes.func,
    onDelete: PropTypes.func,
    onEditDescription: PropTypes.func,
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

  getActionButton = (btnLabel, onClickCallback) => {
    return (
      <button key={btnLabel} className="btnAction" onClick={onClickCallback}>
        <i className="fa fa-edit" />
        {btnLabel}
      </button>
    );
  };

  getTableListItem = () => {
    const hasWarningClass = this.props.measurementData.hasWarnings
      ? 'hasWarnings'
      : '';

    const actionButtons = [];

    if (typeof this.props.onRelabel === 'function') {
      const relabelButton = this.getActionButton(
        'Relabel',
        this.onRelabelClick
      );
      actionButtons.push(relabelButton);
    }
    if (typeof this.props.onEditDescription === 'function') {
      const descriptionButton = this.getActionButton(
        'Description',
        this.onEditDescriptionClick
      );
      actionButtons.push(descriptionButton);
    }
    if (typeof this.props.onDelete === 'function') {
      const deleteButton = this.getActionButton('Delete', this.onDeleteClick);
      actionButtons.push(deleteButton);
    }

    return (
      <TableListItem
        itemKey={this.props.measurementData.measurementId}
        itemClass={`measurementItem ${this.props.itemClass} ${hasWarningClass}`}
        itemIndex={this.props.itemIndex}
        onItemClick={this.onItemClick}
      >
        <div>
          <div className="measurementLocation">
            {this.props.measurementData.label}
          </div>
          <div>{this.getDataDisplayText()}</div>
          <div className="rowActions">{actionButtons}</div>
        </div>
      </TableListItem>
    );
  };

  onItemClick = event => {
    this.props.onItemClick(event, this.props.measurementData);
  };

  onRelabelClick = event => {
    // Prevent onItemClick from firing
    event.stopPropagation();

    this.props.onRelabel(event, this.props.measurementData);
  };

  onEditDescriptionClick = event => {
    // Prevent onItemClick from firing
    event.stopPropagation();

    this.props.onEditDescription(event, this.props.measurementData);
  };

  onDeleteClick = event => {
    // Prevent onItemClick from firing
    event.stopPropagation();

    this.props.onDelete(event, this.props.measurementData);
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
