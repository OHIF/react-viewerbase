import { Component } from 'react';
import React from 'react';
import ToolbarButton from './ToolbarButton.js';
import PropTypes from 'prop-types';

const wLPresetIDs = [
  'setWLPresetSoftTissue',
  'setWLPresetLung',
  'setWLPresetLiver',
  'setWLPresetBrain'
];

export default class PresetToggle extends Component {
  static propTypes = {
    buttons: PropTypes.array.isRequired,
    setToolActive: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      presetSelected: null
    };
  }
  render() {
    /*const items = this.props.buttons.map((item, index) => {
      return <ToolbarButton key={index} {...item} click={this.onClick} />;
    });*/

    const wlPresetItems = this.props.buttons.map((item, index) => {
      if (wLPresetIDs.includes(item.command)) {
        return <ToolbarButton key={index} {...item} click={this.onClick} />;
      }
      return '';
    });

    const toolItems = this.props.buttons.map((item, index) => {
      if (!wLPresetIDs.includes(item.command)) {
        return <ToolbarButton key={index} {...item} click={this.onClick} />;
      }
      return '';
    });

    const selectedButton = this.props.buttons.find(item => {
      return item.id === this.state.selected;
    });

    return (
      <div className="PresetToggle">
        <div className="wlPresets">{wlPresetItems}</div>
        <div className="tools">{toolItems}</div>
        <span className="presetSelected">
          LEVELS:
          {selectedButton ? selectedButton.text : 'Manual'}
        </span>
      </div>
    );
  }

  onClick = id => {
    const buttonItem = this.props.buttons.find(item => item.command === id);

    this.setState({
      selected: buttonItem.id
    });
  };
}
