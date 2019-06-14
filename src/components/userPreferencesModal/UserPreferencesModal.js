import './UserPreferencesModal.styl';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap-modal';
import i18n from '@ohif/i18n';
import { withTranslation } from 'react-i18next';

import 'react-bootstrap-modal/lib/css/rbm-patch.css';
import cloneDeep from 'lodash.clonedeep';
import isEqual from 'lodash.isequal';
import { UserPreferences } from './UserPreferences';

// TODO: Is this the only component importing these?
import './../../design/styles/common/modal.styl';

class UserPreferencesModal extends Component {
  // TODO: Make this component more generic to allow things other than W/L and hotkeys...
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onCancel: PropTypes.func,
    onSave: PropTypes.func,
    onResetToDefaults: PropTypes.func,
    windowLevelData: PropTypes.object,
    hotKeysData: PropTypes.object,
    generalData: PropTypes.shape({
      currentLanguage: PropTypes.string.isRequired,
      languages: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string,
          label: PropTypes.string,
        })
      ).isRequired,
      onChange: PropTypes.func.isRequired,
    }),
    t: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      windowLevelData: cloneDeep(props.windowLevelData),
      hotKeysData: cloneDeep(props.hotKeysData),
      generalData: {
        currentLanguage: i18n.language.substring(0, 2),
        // TODO: list of available languages should come from i18n.options.resources
        languages: [
          {
            value: 'en',
            label: 'English',
          },
          {
            value: 'es',
            label: 'Spanish',
          },
        ],
        onChange: language => {
          this.changeLanguage(language);
        },
      },
    };
  }

  static defaultProps = {
    isOpen: false,
  };

  changeLanguage(language) {
    this.setState({
      generalData: {
        ...this.state.generalData,
        currentLanguage: language,
      },
    });

    i18n.init({
      fallbackLng: language.split('-')[0],
      lng: language,
    });
  }

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
          <Modal.Title>{this.props.t('User Preferences')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserPreferences
            windowLevelData={this.state.windowLevelData}
            hotKeysData={this.state.hotKeysData}
            generalData={this.state.generalData}
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-danger pull-left"
            onClick={this.props.onResetToDefaults}
          >
            {this.props.t('Reset to Defaults')}
          </button>
          <Modal.Dismiss className="btn btn-default">
            {this.props.t('Cancel')}
          </Modal.Dismiss>
          <button className="btn btn-primary" onClick={this.save}>
            {this.props.t('Save')}
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const connectedComponent = withTranslation('UserPreferencesModal')(
  UserPreferencesModal
);
export { connectedComponent as UserPreferencesModal };
export default connectedComponent;
