import 'react-bootstrap-modal/lib/css/rbm-patch.css';
// TODO: Is this the only component importing these?
import './../../design/styles/common/modal.styl';

import React, { Component } from 'react';

import Modal from 'react-bootstrap-modal';
import PropTypes from 'prop-types';
import { UserPreferences } from './UserPreferences';
import cloneDeep from 'lodash.clonedeep';
import isEqual from 'lodash.isequal';

// TODO: Make this component more generic to allow things other than W/L and hotkeys...
export class UserPreferencesModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onResetToDefaults: PropTypes.func.isRequired,
    windowLevelData: PropTypes.object.isRequired,
    hotKeysData: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      windowLevelData: cloneDeep(props.windowLevelData),
      hotKeysData: cloneDeep(props.hotKeysData),
    };
  }

  static defaultProps = {
    isOpen: false,
  };

  save = () => {
    this.props.onSave({
      windowLevelData: this.state.windowLevelData,
      hotKeysData: this.state.hotKeysData,
    });
  };

  componentDidUpdate(prev, next) {
    const newStateData = {};

    if (!isEqual(prev.windowLevelData, next.windowLevelData)) {
      newStateData.windowLevelData = prev.windowLevelData;
    }

    if (!isEqual(prev.hotKeysData, next.hotKeysData)) {
      newStateData.hotKeysData = prev.hotKeysData;
    }

    if (newStateData.hotKeysData || newStateData.windowLevelData) {
      this.setState(newStateData);
    }
  }

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
            windowLevelData={this.state.windowLevelData}
            hotKeysData={this.state.hotKeysData}
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
          <button className="btn btn-primary" onClick={this.save}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}
