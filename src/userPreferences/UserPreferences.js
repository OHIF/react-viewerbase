import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HotKeysPreferences from './HotKeysPreferences';
import WindowLevelPreferences from './WindowLevelPreferences';
import './UserPreferences.styl';

export default class UserPreferences extends Component {
  constructor(props) {
    super(props);

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
          <HotKeysPreferences hotKeysData={this.props.hotKeysData} />
        </div>
      </form>
    );
  }

  renderWindowLevelTab() {
    if (this.props.windowLevelData) {
      return (
        <form className="form-themed themed">
          <div className="form-content">
            <WindowLevelPreferences
              windowLevelData={this.props.windowLevelData}
            />
          </div>
        </form>
      );
    }
  }

  renderTabs(tabIndex) {
    if (tabIndex === 0) {
      return this.renderHotkeysTab();
    } else {
      return this.renderWindowLevelTab();
    }
  }

  getTabClass(tabIndex) {
    return tabIndex === this.state.tabIndex ? 'nav-link active' : 'nav-link';
  }

  render() {
    return (
      <div>
        <div className="dialog-separator-after">
          <ul className="nav nav-tabs">
            <li
              onClick={() => {
                this.tabClick(0);
              }}
              className={this.getTabClass(0)}
            >
              <a className="nav-link">Hotkeyss</a>
            </li>
            <li
              onClick={() => {
                this.tabClick(1);
              }}
              className={this.getTabClass(1)}
            >
              <a className={this.getTabClass(0)}>Window Level</a>
            </li>
          </ul>
        </div>
        {this.renderTabs(this.state.tabIndex)}
      </div>
    );
  }
}
