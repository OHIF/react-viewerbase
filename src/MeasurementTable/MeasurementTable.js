import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MeasurementTable.styl';

class MeasurementTable extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return <></>;
  }
}

MeasurementTable.PropTypes = {
  measurementCollection: PropTypes.object.isRequired
};

export default MeasurementTable;
