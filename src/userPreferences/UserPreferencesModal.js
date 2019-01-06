import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap-modal';
import 'react-bootstrap-modal/lib/css/rbm-patch.css';

import UserPreferences from './UserPreferences';
import '../design/styles/common/modal.styl';

export default class UserPreferencesModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabIndex: 0
    };

    this.resetToDefaults = this.resetToDefaults.bind(this);
    this.cancel = this.cancel.bind(this);
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

  resetToDefaults() {
    this.props.onResetToDefaults();
  }

  cancel() {
    this.props.onCancel();
  }

  render() {
    return (
      <Modal
        show={this.props.isOpen}
        onHide={this.cancel}
        aria-labelledby="ModalHeader"
        className="modal fade themed in"
        backdrop={false}
        large={true}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>User Preferences</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserPreferences
            windowLevelData={this.props.windowLevelData}
            hotKeysData={this.props.hotKeysData}
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-danger pull-left"
            onClick={this.resetToDefaults}
          >
            Reset to Defaults
          </button>
          <Modal.Dismiss className="btn btn-default">Cancel</Modal.Dismiss>
          <button className="btn btn-primary" onClick={this.props.onSave}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}
