import React, { Component } from 'react';
import './HotKeysPreferences.styl';
import PropTypes from 'prop-types';

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
        { preset: 5, description: null, window: null, level: null },
        { preset: 6, description: null, window: null, level: null },
        { preset: 7, description: null, window: null, level: null },
        { preset: 8, description: null, window: null, level: null },
        { preset: 9, description: null, window: null, level: null },
        { preset: 10, description: null, window: null, level: null }
      ]
    };
  }

  getWLPreferencesRows(entry) {
    return (
      <tr key={entry.preset}>
        <td class="p-x-1 text-center">{entry.preset}</td>
        <td class="p-x-1">
          <input
            value={entry.description}
            type="text"
            vali="true"
            className="form-control"
            // onKeyDown={event => this.onInputKeyDown(event, toolKey)}
          />
        </td>
        <td class="p-x-1">
          <input
            value={entry.window}
            type="number"
            vali="true"
            className="form-control"
            // onKeyDown={event => this.onInputKeyDown(event, toolKey)}
          />
        </td>
        <td class="p-x-1">
          <input
            value={entry.level}
            type="number"
            vali="true"
            className="form-control text-center"
            // onKeyDown={event => this.onInputKeyDown(event, toolKey)}
          />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table class="full-width">
        <thead>
          <tr>
            <th class="p-x-1 text-center">Preset</th>
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
