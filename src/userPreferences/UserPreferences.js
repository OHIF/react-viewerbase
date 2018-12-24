import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HotKeysPreferences from './HotKeysPreferences';
import WindowLevelPreferences from './WindowLevelPreferences';

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
    return <HotKeysPreferences />;
  }

  renderWindowLevelTab() {
    return <WindowLevelPreferences />;
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
        <ul class="nav nav-tabs">
          {/** TODO: make the tabs customizable. Client would be able to add more panels inside the tabs or hide some default panels */}
          <li
            onClick={() => {
              this.tabClick(0);
            }}
            class="nav-item"
          >
            <a class="nav-link active">Hotkeys</a>
          </li>
          <li
            onClick={() => {
              this.tabClick(1);
            }}
            class="nav-item"
          >
            <a class="nav-link">Window Level</a>
          </li>
        </ul>
        {this.renderTabs(this.state.tabIndex)}
      </div>
    );
  }
}
