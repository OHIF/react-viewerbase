import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableList from '../TableList/TableList.js';
import MeasurementTableItem from '../MeasurementTableItem/MeasurementTableItem.js';
import ScrollableArea from '../ScrollableArea/ScrollableArea.js';
import OverlayTrigger from '../basic/OverlayTrigger.js';
import Tooltip from '../basic/Tooltip.js';

import './MeasurementTable.styl';

export default class MeasurementTable extends Component {
  static propTypes = {
    measurementCollection: PropTypes.array.isRequired,
    timepoints: PropTypes.array.isRequired,
    overwallWarnings: PropTypes.object
  };

  static defaultProps = {
    overwallWarnings: {
      warningList: []
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedKey: null
    };
  }

  render() {
    const hasOverwallWarnings = this.props.overwallWarnings.warningList.length;
    return (
      <div className="measurementTable">
        <div className="measurementTableHeader">
          {hasOverwallWarnings && (
            <OverlayTrigger
              key={'overwall-warning'}
              placement="left"
              overlay={
                <Tooltip
                  placement="left"
                  className="in tooltip-warning"
                  id="tooltip-left"
                  style={{}}
                >
                  <div className="warningTitle">Criteria nonconformities</div>
                  <div className="warningContent">
                    {this.getWarningContent()}
                  </div>
                </Tooltip>
              }
            >
              <span className="warning-status">
                <span className="warning-border">
                  <svg>
                    <use xlinkHref="/icons.svg#icon-ui-warning" />
                  </svg>
                </span>
              </span>
            </OverlayTrigger>
          )}
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

  getWarningContent = () => {
    const { warningList = '' } = this.props.overwallWarnings;

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
