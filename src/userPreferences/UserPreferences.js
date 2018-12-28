import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HotKeysPreferences from './HotKeysPreferences';
import WindowLevelPreferences from './WindowLevelPreferences';
import './UserPreferences.styl';

export default class UserPreferences extends Component {
  constructor() {
    super();

    this.state = {
      tabIndex: 0
    };
  }

  tabClick(tabIndex) {
    this.setState({ tabIndex });
  }

  renderHotkeysTab() {
    return (
      <form className="form-themed themed">
        <div className="form-content">
          <HotKeysPreferences />
        </div>
      </form>
    );
  }

  renderWindowLevelTab() {
    return (
      <form className="form-themed themed">
        <div className="form-content">
          <WindowLevelPreferences />
        </div>
      </form>
    );
  }

  renderTabs(tabIndex) {
    if (tabIndex === 0) {
      return this.renderHotkeysTab();
    } else {
      return this.renderWindowLevelTab();
    }
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          {/** TODO: make the tabs customizable. Client would be able to add more panels inside the tabs or hide some default panels */}
          <li
            onClick={() => {
              this.tabClick(0);
            }}
            className="nav-item"
          >
            <a className="nav-link active">Hotkeys</a>
          </li>
          <li
            onClick={() => {
              this.tabClick(1);
            }}
            className="nav-item"
          >
            <a className="nav-link">Window Level</a>
          </li>
        </ul>
        {this.renderTabs(this.state.tabIndex)}
      </div>
    );
  }
}
