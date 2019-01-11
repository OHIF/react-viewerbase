import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  allowedKeys,
  disallowedCombinations,
  specialKeys
} from './HotKeysConfig.js';

export default class HotKeysPreferences extends Component {
  static propTypes = {
    hotKeysData: PropTypes.object.isRequired,
    onChange: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.columns = {};

    Object.keys(this.props.hotKeysData).forEach(key => {
      const hotKey = this.props.hotKeysData[key];

      if (this.columns.hasOwnProperty(hotKey.column)) {
        this.columns[hotKey.column].push(key);
      } else {
        this.columns[hotKey.column] = [key];
      }
    });

    this.columnClass = `col-md-${12 / Object.keys(this.columns).length || 1}`;

    this.state = {
      hotKeys: this.props.hotKeysData,
      errorMessages: {}
    };

    this.onInputKeyDown = this.onInputKeyDown.bind(this);
  }

  componentDidUpdate(prevProps) {
    // todo object equal
    //if (thi.s. )
  }

  getKeysPressedArray(event) {
    const keysPressedArray = [];

    if (event.ctrlKey && !event.altKey) {
      keysPressedArray.push('CTRL');
    }

    if (event.shiftKey && !event.altKey) {
      keysPressedArray.push('SHIFT');
    }

    if (event.altKey && !event.ctrlKey) {
      keysPressedArray.push('ALT');
    }

    return keysPressedArray;
  }

  getConflictingCommand(currentToolKey, hotKeyCommand) {
    return Object.keys(this.state.hotKeys).find(tool => {
      const value = this.state.hotKeys[tool].command;
      return value && value === hotKeyCommand && tool !== currentToolKey;
    });
  }

  updateInputText(toolKey, event, displayPressedKey = false) {
    const pressedKeys = this.getKeysPressedArray(event);

    if (displayPressedKey) {
      const specialKeyName = specialKeys[event.which];
      const keyName =
        specialKeyName || String.fromCharCode(event.keyCode) || event.key;
      pressedKeys.push(keyName.toUpperCase());
    }

    this.updateHotKeysState(toolKey, pressedKeys.join('+'));
  }

  updateHotKeysState(toolKey, command, callback = () => {}) {
    const hotKeys = this.state.hotKeys;
    hotKeys[toolKey].command = command;
    this.setState(hotKeys, callback);
  }

  updateErrorsState(toolKey, errorMessage, callback = () => {}) {
    const errorMessages = this.state.errorMessages;
    errorMessages[toolKey] = errorMessage;
    this.setState({ errorMessages }, callback);
  }

  onInputKeyDown(event, toolKey) {
    // Prevent ESC key from propagating and closing the modal
    if (event.key === 'Escape') {
      event.stopPropagation();
    }

    if (allowedKeys.includes(event.keyCode)) {
      this.updateInputText(toolKey, event, true);
    } else {
      this.updateInputText(toolKey, event, false);
    }

    event.preventDefault();
  }

  onChange(event, toolKey) {
    if (event.ctrlKey || event.altKey || event.shiftKey) {
      return;
    }

    const hotKey = this.state.hotKeys[toolKey];
    const command = hotKey.command;
    const pressedKeys = command.split('+');
    const lastPressedKey = pressedKeys[pressedKeys.length - 1].toUpperCase();

    // clear the prior errors
    this.setState({ errorMessages: {} }, () => {
      // Check if it has a valid modifier
      const isModifier = ['CTRL', 'ALT', 'SHIFT'].includes(lastPressedKey);
      if (isModifier) {
        this.updateHotKeysState(toolKey, '');
        this.updateErrorsState(
          toolKey,
          "It's not possible to define only modifier keys (CTRL, ALT and SHIFT) as a shortcut"
        );
        return;
      }

      /*
       * Check if it has some conflict
       */
      const conflictedCommandKey = this.getConflictingCommand(toolKey, command);
      if (conflictedCommandKey) {
        const conflictedCommand = this.state.hotKeys[conflictedCommandKey];

        this.updateErrorsState(
          toolKey,
          `"${conflictedCommand.label}" is already using the "${
            conflictedCommand.command
          }" shortcut.`
        );
        this.updateErrorsState(conflictedCommandKey, '');
        this.updateHotKeysState(toolKey, '');
        return;
      }

      /*
       * Check if is a valid combination
       */
      const modifierCommand = pressedKeys
        .slice(0, pressedKeys.length - 1)
        .join('+')
        .toUpperCase();

      const hasDisallowedCombinations = disallowedCombinations[
        modifierCommand
      ].includes(lastPressedKey);

      if (hasDisallowedCombinations) {
        this.updateHotKeysState(toolKey, '');
        this.updateErrorsState(
          toolKey,
          "It's not possible to define only modifier keys (CTRL, ALT and SHIFT) as a shortcut"
        );
        return;
      }
    });

    if (this.props.onChange) {
      this.props.onChange(this.state.hotKeys);
    }
  }

  renderRow(toolKey, hotKey) {
    return (
      <tr key={toolKey}>
        <td className="text-right p-r-1">{hotKey.label}</td>
        <td width="200">
          <label
            className={`wrapperLabel ${
              this.state.errorMessages[toolKey] !== undefined
                ? 'state-error'
                : ''
            } `}
            ref={input => (this[toolKey] = input)}
            data-key="defaultTool"
          >
            <input
              readOnly={true}
              type="text"
              value={hotKey.command}
              vali="true"
              className="form-control hotkey text-center"
              onKeyDown={event => this.onInputKeyDown(event, toolKey)}
              onKeyUp={event => this.onChange(event, toolKey)}
            />
            <span className="wrapperText" />
            <span className="errorMessage">
              {this.state.errorMessages[toolKey]}
            </span>
          </label>
        </td>
      </tr>
    );
  }

  renderColumn(columnIndex, hotkeysColumn) {
    return (
      <div key={columnIndex} className={this.columnClass}>
        <table className="full-width">
          <thead>
            <tr>
              <th className="text-right p-r-1">Function</th>
              <th className="text-center">Shortcut</th>
            </tr>
          </thead>
          <tbody>
            {hotkeysColumn.map(keyTool =>
              this.renderRow(keyTool, this.state.hotKeys[keyTool])
            )}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <div className="row">
        {Object.keys(this.columns)
          .sort()
          .map(columnIndex =>
            this.renderColumn(columnIndex, this.columns[columnIndex])
          )}
      </div>
    );
  }
}
