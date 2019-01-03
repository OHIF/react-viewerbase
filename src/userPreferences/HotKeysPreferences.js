import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HotKeysPreferences extends Component {
  static range = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start);
  };

  static disallowedCombinations = {
    '': [],
    ALT: ['SPACE'],
    SHIFT: [],
    CTRL: [
      'F4',
      'F5',
      'F11',
      'W',
      'R',
      'T',
      'O',
      'P',
      'A',
      'D',
      'F',
      'G',
      'H',
      'J',
      'L',
      'Z',
      'X',
      'C',
      'V',
      'B',
      'N',
      'PAGEDOWN',
      'PAGEUP'
    ],
    'CTRL+SHIFT': ['Q', 'W', 'R', 'T', 'P', 'A', 'H', 'V', 'B', 'N']
  };

  static allowedKeys = [
    ...[8, 13, 27, 32, 46], // BACKSPACE, ENTER, ESCAPE, SPACE, DELETE
    ...[12, 106, 107, 109, 110, 111], // Numpad keys
    ...HotKeysPreferences.range(219, 221), // [\]
    ...HotKeysPreferences.range(186, 191), // ;=,-./
    ...HotKeysPreferences.range(112, 130), // F1-F19
    ...HotKeysPreferences.range(33, 40), // arrow keys, home/end, pg dn/up
    ...HotKeysPreferences.range(48, 57), // 0-9
    ...HotKeysPreferences.range(65, 90) // A-Z
  ];

  static specialKeys = {
    8: 'backspace',
    9: 'tab',
    13: 'return',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    19: 'pause',
    20: 'capslock',
    27: 'esc',
    32: 'space',
    33: 'pageup',
    34: 'pagedown',
    35: 'end',
    36: 'home',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    45: 'insert',
    46: 'del',
    96: '0',
    97: '1',
    98: '2',
    99: '3',
    100: '4',
    101: '5',
    102: '6',
    103: '7',
    104: '8',
    105: '9',
    106: '*',
    107: '+',
    109: '-',
    110: '.',
    111: '/',
    112: 'f1',
    113: 'f2',
    114: 'f3',
    115: 'f4',
    116: 'f5',
    117: 'f6',
    118: 'f7',
    119: 'f8',
    120: 'f9',
    121: 'f10',
    122: 'f11',
    123: 'f12',
    144: 'numlock',
    145: 'scroll',
    191: '/',
    224: 'meta'
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
      const specialKeyName = HotKeysPreferences.specialKeys[event.which];
      const keyName =
        specialKeyName || String.fromCharCode(event.keyCode) || event.key;
      pressedKeys.push(keyName.toUpperCase());
    }

    this.updateHotKeysState(toolKey, pressedKeys.join('+'), () => {
      this.onChange(event, toolKey);
    });
  }

  updateHotKeysState(toolKey, command, callback = () => {}) {
    const hotKeys = this.state.hotKeys;
    hotKeys[toolKey].command = command;
    this.setState(hotKeys, callback);
  }

  updateErrorsState(toolKey, errorMessage, callback = () => {}) {
    const errorMessages = this.state.errorMessages;
    errorMessages[toolKey] = errorMessage;
    this.setState(errorMessages, callback);
  }

  onInputKeyDown(event, toolKey) {
    // Prevent ESC key from propagating and closing the modal
    if (event.key === 'Escape') {
      event.stopPropagation();
      return;
    }

    if (HotKeysPreferences.allowedKeys.includes(event.keyCode)) {
      this.updateInputText(toolKey, event, true);
    } else {
      this.updateInputText(toolKey, event, false);
    }

    event.preventDefault();
  }

  onChange(event, toolKey) {
    const hotKey = this.state.hotKeys[toolKey];
    const command = hotKey.command;
    const pressedKeys = command.split('+');
    const lastPressedKey = pressedKeys[pressedKeys.length - 1].toUpperCase();
    /*
     * Check if it has a valid modifier
     */
    const isModifier = ['CTRL', 'ALT', 'SHIFT'].includes(lastPressedKey);
    if (isModifier) {
      // TODO: save state at the same time
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
    const conflictedCommand = this.getConflictingCommand(toolKey, command);
    if (conflictedCommand) {
      this.updateErrorsState(toolKey, 'conflict');
      this.updateErrorsState(conflictedCommand, 'conflict-no-popover');
      return;
    }

    /*
     * Check if is a valid combination
     */
    const modifierCommand = pressedKeys
      .slice(0, pressedKeys.length - 1)
      .join('+')
      .toUpperCase();

    const hasDisallowedCombinations = HotKeysPreferences.disallowedCombinations[
      modifierCommand
    ].includes(lastPressedKey);

    if (hasDisallowedCombinations) {
      // TODO: save state at the same time
      this.updateHotKeysState(toolKey, '');
      this.updateErrorsState(
        toolKey,
        "It's not possible to define only modifier keys (CTRL, ALT and SHIFT) as a shortcut"
      );
      return;
    }

    // remove error if everything is ok
    this.updateErrorsState(toolKey, '');
  }

  renderRow(toolKey, hotKey) {
    return (
      <tr key={toolKey}>
        <td className="text-right p-r-1">{hotKey.label}</td>
        <td width="200">
          <label
            className={`wrapperLabel
    ${this.state.errorMessages[toolKey] ? 'state-error' : ''} `}
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
            />
            <span className="wrapperText" />
          </label>
        </td>
        {/* <td>{this.state.errorMessages[tool]}</td> */}
      </tr>
    );
  }

  onHide() {
    alert('hiding');
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
