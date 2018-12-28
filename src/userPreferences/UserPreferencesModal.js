import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap-modal';
import 'react-bootstrap-modal/lib/css/rbm-patch.css';

import UserPreferences from './UserPreferences';
import '../design/styles/common/modal.styl';

export default class UserPreferencesModal extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
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

  closeModal() {
    return false;
  }

  openModal() {
    this.setState({ open: true });
  }

  saveAndClose() {}

  render() {
    return (
      <div>
        <button
          class="btn btn-primary"
          type="button"
          onClick={this.openModal.bind(this)}
        >
          Open user preferences
        </button>
        <Modal
          show={this.state.open}
          onHide={this.closeModal}
          aria-labelledby="ModalHeader"
          className="modal fade themed in"
        >
          <Modal.Header closeButton>
            <Modal.Title>User preferences</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserPreferences />
          </Modal.Body>
          <Modal.Footer>
            <button class="btn btn-danger pull-left">Reset to Defaults</button>
            <Modal.Dismiss className="btn btn-default">Cancel</Modal.Dismiss>
            <button className="btn btn-primary" onClick={this.saveAndClose}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
