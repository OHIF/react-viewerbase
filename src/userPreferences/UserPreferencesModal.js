import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap-modal';
import 'react-bootstrap-modal/lib/css/rbm-patch.css';

import UserPreferences from './UserPreferences';
import '../design/styles/common/modal.styl';

export default class UserPreferencesModal extends Component {
  constructor(props) {
    super(props);

    this.windowLevelDefault = JSON.parse(
      JSON.stringify(this.props.windowLevelData)
    );
    this.hotKeysDefault = JSON.parse(JSON.stringify(this.props.hotKeysData));

    this.state = {
      tabIndex: 0,
      windowLevelData: this.props.windowLevelData,
      hotKeysData: this.props.hotKeysData
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

  reset() {
    this.setState(
      {
        windowLevel: this.windowLevelDefault,
        hotKeys: this.hotKeysDefault
      },
      () => {
        this.setState({ state: this.state });
        // alert('alooww')
        // this.forceUpdate();
      }
    );
  }

  render() {
    return (
      <Modal
        show={this.props.isOpen}
        onHide={this.props.onHideModal}
        aria-labelledby="ModalHeader"
        className="modal fade themed in"
      >
        <Modal.Header closeButton>
          <Modal.Title>User preferences</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserPreferences
            windowLevelData={this.props.windowLevelData}
            hotKeysData={this.props.hotKeysData}
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            class="btn btn-danger pull-left"
            onClick={this.reset.bind(this)}
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
