import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableList from '../TableList/TableList.js';
import MeasurementTableItem from '../MeasurementTableItem/MeasurementTableItem.js';
import ScrollableArea from '../ScrollableArea/ScrollableArea.js';

import './MeasurementTable.styl';

export default class MeasurementTable extends Component {
  static propTypes = {
    measurementCollection: PropTypes.array.isRequired,
    timepoints: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedKey: null
    };
  }

  render() {
    return (
      <div className="measurementTable">
        <div className="measurementTableHeader">
          {this.getTimepointsHeader()}
        </div>
        <ScrollableArea>
          <div>{this.getMeasurementsGroups()}</div>
        </ScrollableArea>
      </div>
    );
  }

  getMeasurementsGroups = () => {
    return this.props.measurementCollection.map((measureGroup, index) => {
      return (
        <TableList
          key={index}
          customHeader={this.getCustomHeader(measureGroup)}
        >
          {this.getMeasurements(measureGroup)}
        </TableList>
      );
    });
  };

  getMeasurements = measureGroup => {
    return measureGroup.measurements.map((measurement, index) => {
      const key = `${measureGroup.groupName}_${index}`;
      return (
        <MeasurementTableItem
          key={key}
          itemIndex={index}
          itemKey={key}
          itemClass={this.state.selectedKey === key ? 'selected' : ''}
          measurementData={measurement}
          onItemClick={this.onItemClick}
          onRelabel={() => {
            alert('relabel');
          }}
          onDelete={() => {
            alert('delete');
          }}
          onEditDescription={() => {
            alert('editDescription');
          }}
        />
      );
    });
  };

  getCustomHeader = measureGroup => {
    return (
      <>
        <div className="tableListHeaderTitle">{measureGroup.groupName}</div>
        {measureGroup.maxMeasurements && (
          <div className="maxMeasurements">
            MAX {measureGroup.maxMeasurements}
          </div>
        )}
        <div className="numberOfItems">{measureGroup.measurements.length}</div>
      </>
    );
  };

  getTimepointsHeader = () => {
    return this.props.timepoints.map((timepoint, index) => {
      return (
        <div key={index} className="measurementTableHeaderItem">
          <div className="timepointLabel">{timepoint.label}</div>
          <div className="timepointDate">{timepoint.date}</div>
        </div>
      );
    });
  };

  onItemClick = (event, itemProps) => {
    this.setState({
      selectedKey: itemProps.itemKey
    });
  };
}
