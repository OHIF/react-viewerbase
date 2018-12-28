import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WindowLevelPreferences.styl';

export default class WindowLevelPreferences extends Component {
  constructor() {
    super();
    this.state = {
      entries: [
        { preset: 0, description: 'Soft tissue', window: 400, level: 40 },
        { preset: 1, description: 'Lung', window: 1500, level: -600 },
        { preset: 2, description: 'Liver', window: 150, level: 90 },
        { preset: 3, description: 'Bone', window: 2500, level: 480 },
        { preset: 4, description: 'Brain', window: 80, level: 40 },
        {
          preset: 5,
          description: undefined,
          window: undefined,
          level: undefined
        },
        {
          preset: 6,
          description: undefined,
          window: undefined,
          level: undefined
        },
        {
          preset: 7,
          description: undefined,
          window: undefined,
          level: undefined
        },
        {
          preset: 8,
          description: undefined,
          window: undefined,
          level: undefined
        },
        {
          preset: 9,
          description: undefined,
          window: undefined,
          level: undefined
        },
        {
          preset: 10,
          description: undefined,
          window: undefined,
          level: undefined
        }
      ]
    };
  }

  getWLPreferencesRows(entry) {
    return (
      <tr key={entry.preset}>
        <td class="p-r-1 text-center">{entry.preset}</td>
        <td class="p-r-1">
          <label className="wrapperLabel">
            <input
              value={entry.description}
              type="text"
              readOnly={true}
              vali="true"
              className="form-control"
              // onKeyDown={event => this.onInputKeyDown(event, toolKey)}
            />
          </label>
        </td>
        <td class="p-r-1">
          <label className="wrapperLabel">
            <input
              value={entry.window}
              type="number"
              vali="true"
              readOnly={true}
              className="form-control"
              // onKeyDown={event => this.onInputKeyDown(event, toolKey)}
            />
          </label>
        </td>
        <td class="p-r-1">
          <label className="wrapperLabel">
            <input
              value={entry.level}
              type="number"
              vali="true"
              readOnly={true}
              className="form-control text-center"
              // onKeyDown={event => this.onInputKeyDown(event, toolKey)}
            />
          </label>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table class="full-width">
        <thead>
          <tr>
            <th class="p-x-1 text-center presetIndex">Preset</th>
            <th class="p-x-1">Description</th>
            <th class="p-x-1">Window</th>
            <th class="p-x-1">Level</th>
          </tr>
        </thead>
        <tbody>
          {this.state.entries.map(entry => {
            return this.getWLPreferencesRows(entry);
          })}
        </tbody>
      </table>
    );
  }
}
