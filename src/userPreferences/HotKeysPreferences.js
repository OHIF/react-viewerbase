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

    this.state = {
      // TODO: make this configurable
      hotKeys: {
        defaultTool: 'ESC',
        zoom: 'Z',
        wwwc: 'W',
        pan: 'P',
        angle: 'A',
        stackScroll: 'S',
        magnify: 'M',
        length: '',
        annotate: '',
        dragProbe: '',
        ellipticalRoi: '',
        rectangleRoi: '',

        // Viewport hotkeys
        flipH: 'H',
        flipV: 'V',
        rotateR: 'R',
        rotateL: 'L',
        invert: 'I',
        zoomIn: '',
        zoomOut: '',
        zoomToFit: '',
        resetViewport: '',
        clearTools: '',

        // Viewport navigation hotkeys
        scrollDown: 'DOWN',
        scrollUp: 'UP',
        scrollLastImage: 'END',
        scrollFirstImage: 'HOME',
        previousDisplaySet: 'PAGEUP',
        nextDisplaySet: 'PAGEDOWN',
        nextPanel: 'RIGHT',
        previousPanel: 'LEFT',

        // Miscellaneous hotkeys
        toggleOverlayTags: 'O',
        toggleCinePlay: 'SPACE',
        toggleCineDialog: '',
        toggleDownloadDialog: '',

        // Preset hotkeys
        WLPreset0: '1',
        WLPreset1: '2',
        WLPreset2: '3',
        WLPreset3: '4',
        WLPreset4: '5',
        WLPreset5: '6',
        WLPreset6: '7',
        WLPreset7: '8',
        WLPreset8: '9',
        WLPreset9: '0'
      }
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

  getConflictingCommand(currentCommand, currentValue) {
    return Object.keys(this.state.hotKeys).find(command => {
      const value = this.state.hotKeys[command];
      return value && value === currentValue && command !== currentCommand;
    });
  }

  updateInputText(command, event, displayPressedKey = false) {
    const hotKeys = this.state.hotKeys;

    const pressedKeys = this.getKeysPressedArray(event);

    if (displayPressedKey) {
      const specialKeyName = HotKeysPreferences.specialKeys[event.which];
      const keyName =
        specialKeyName || String.fromCharCode(event.keyCode) || event.key;
      pressedKeys.push(keyName.toUpperCase());
    }

    hotKeys[command] = pressedKeys.join('+');
    this.setState(hotKeys, () => {
      if (displayPressedKey) {
        this.onChange(command);
      }
    });
  }

  onInputKeyDown(event, command) {
    // Prevent ESC key from propagating and closing the modal
    if (event.key === 'Escape') {
      event.stopPropagation();
      return;
    }

    debugger;
    console.log(HotKeysPreferences.allowedKeys);
    if (HotKeysPreferences.allowedKeys.includes(event.keyCode)) {
      this.updateInputText(command, event, true);
    } else {
      this.updateInputText(command, event, false);
    }

    event.preventDefault();
  }

  onChange(command) {
    const combination = this.state.hotKeys[command];
    const pressedKeys = combination.split('+');
    const lastPressedKey = pressedKeys[pressedKeys.length - 1].toUpperCase();
    const isModifier = ['CTRL', 'ALT', 'SHIFT'].includes(lastPressedKey);

    if (isModifier) {
      // TODO: set error
      alert(
        "It's not possible to define only modifier keys (CTRL, ALT and SHIFT) as a shortcut"
      );
      return;
    }

    debugger;
    const conflictedCommand = this.getConflictingCommand(command, combination);
    if (conflictedCommand) {
      // TODO: set error
      alert('conflicted command ' + JSON.stringify(conflictedCommand));
      return;
    }

    const modifierCombination = pressedKeys
      .slice(0, pressedKeys.length - 2)
      .join('+')
      .toUpperCase();
    const hasDisallowedCombinations = HotKeysPreferences.disallowedCombinations[
      modifierCombination
    ].includes(lastPressedKey);
    if (hasDisallowedCombinations) {
      alert(`The "${combination}" shortcut combination is not allowed`);
      return;
    }
  }

  renderRow(command, combination) {
    return (
      <tr key={command}>
        <td className="text-right p-r-1">{command}</td>
        <td width="200">
          <input
            value={combination}
            onKeyDown={event => this.onInputKeyDown(event, command)}
            onChange={event => this.onChange(event, command)}
          />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="full-width">
        <thead>
          <tr>
            <th className="text-right p-r-1">Function</th>
            <th className="text-center">Shortcut</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(this.state.hotKeys).map(key =>
            this.renderRow(key, this.state.hotKeys[key])
          )}
        </tbody>
      </table>
    );
  }
}
