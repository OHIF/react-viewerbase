import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WindowLevelPreferences.styl';

export default class WindowLevelPreferences extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.windowLevelData
    };
  }

  onChange(event, key, field) {
    const data = this.state.data;
    const entry = data[key];
    entry[field] = event.target.value;
    this.setState({ data });
  }

  getWLPreferencesRows(key) {
    const entry = this.state.data[key];
    return (
      <tr key={key}>
        <td className="p-r-1 text-center">{key}</td>
        <td className="p-r-1">
          <label className="wrapperLabel">
            <input
              value={entry.description}
              type="text"
              vali="true"
              className="form-control"
              onChange={event => {
                this.onChange(event, key, 'description');
              }}
            />
          </label>
        </td>
        <td className="p-r-1">
          <label className="wrapperLabel">
            <input
              value={entry.window}
              type="number"
              vali="true"
              className="form-control"
              onChange={event => {
                this.onChange(event, key, 'window');
              }}
            />
          </label>
        </td>
        <td className="p-r-1">
          <label className="wrapperLabel">
            <input
              value={entry.level}
              type="number"
              vali="true"
              className="form-control"
              onChange={event => {
                this.onChange(event, key, 'level');
              }}
            />
          </label>
        </td>
      </tr>
    );
  }

  resetForm() {
    return 'reset me!!! ';
  }

  render() {
    return (
      <table className="full-width">
        <thead>
          <tr>
            <th className="p-x-1 text-center presetIndex">Preset</th>
            <th className="p-x-1">Description</th>
            <th className="p-x-1">Window</th>
            <th className="p-x-1">Level</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(this.state.data).map(key => {
            return this.getWLPreferencesRows(key);
          })}
        </tbody>
      </table>
    );
  }
}
