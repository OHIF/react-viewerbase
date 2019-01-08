import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap-modal';
import 'react-bootstrap-modal/lib/css/rbm-patch.css';

import UserPreferences from './UserPreferences';
import '../design/styles/common/modal.styl';

export default class UserPreferencesModal extends Component {
  // TODO: Make this component more generic to allow things other than W/L and hotkeys...
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onCancel: PropTypes.func,
    onSave: PropTypes.func,
    onResetToDefaults: PropTypes.func,
    windowLevelData: PropTypes.object,
    hotKeysData: PropTypes.object
  };

  static defaultProps = {
    isOpen: false
  };

  render() {
    return (
      <Modal
        show={this.props.isOpen}
        onHide={this.props.onCancel}
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
            onClick={this.props.onResetToDefaults}
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
