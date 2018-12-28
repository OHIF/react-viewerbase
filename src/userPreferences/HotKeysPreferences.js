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
        defaultTool: { label: 'Default Tool', command: 'ESC' },
        zoom: { label: 'Zoom', command: 'Z' },
        wwwc: { label: 'W/L', command: 'W' },
        pan: { label: 'Pan', command: 'P' },
        angle: { label: 'Angle measurement', command: 'A' },
        stackScroll: { label: 'Scroll stack', command: 'S' },
        magnify: { label: 'Magnify', command: 'M' },
        length: { label: 'Length measurement', command: '' },
        annotate: { label: 'Annotate', command: '' },
        dragProbe: { label: 'Pixel probe', command: '' },
        ellipticalRoi: { label: 'Elliptical ROI', command: '' },
        rectangleRoi: { label: 'Rectangle ROI', command: '' },

        // Viewport hotkeys
        flipH: { label: 'Flip Horizontally', command: 'H' },
        flipV: { label: 'Flip Vertically', command: 'V' },
        rotateR: { label: 'Rotate Right', command: 'R' },
        rotateL: { label: 'Rotate Left', command: 'L' },
        invert: { label: 'Invert', command: 'I' },
        zoomIn: { label: 'Zoom In', command: '' },
        zoomOut: { label: 'Zoom Out', command: '' },
        zoomToFit: { label: 'Zoom to Fit', command: '' },
        resetViewport: { label: 'Reset', command: '' },
        clearTools: { label: 'Clear Tools', command: '' },

        // 2nd column

        // Viewport navigation hotkeys
        scrollDown: { label: 'Scroll Down', command: 'DOWN' },
        scrollUp: { label: 'Scroll Up', command: 'UP' },
        scrollLastImage: { label: 'Scroll to Last Image', command: 'END' },
        scrollFirstImage: { label: 'Scroll to First Image', command: 'HOME' },
        previousDisplaySet: { label: 'Previous Series', command: 'PAGEUP' },
        nextDisplaySet: { label: 'Next Series', command: 'PAGEDOWN' },
        nextPanel: { label: 'Next Image Viewport', command: 'RIGHT' },
        previousPanel: { label: 'Previous Image Viewport', command: 'LEFT' },

        // Miscellaneous hotkeys
        toggleOverlayTags: { label: 'Toggle Image Info Overlay', command: 'O' },
        toggleCinePlay: { label: 'Play/Pause Cine', command: 'SPACE' },
        toggleCineDialog: { label: 'Show/Hide Cine Controls', command: '' },
        toggleDownloadDialog: {
          label: 'Show/Hide Download Dialog',
          command: ''
        },

        // Preset hotkeys
        WLPreset0: { label: 'W/L Preset 0  (Soft Tissue)', command: '1' },
        WLPreset1: { label: 'W/L Preset 1 (Lung)', command: '2' },
        WLPreset2: { label: 'W/L Preset 2 (Liver)', command: '3' },
        WLPreset3: { label: 'W/L Preset 3 (Bone)', command: '4' },
        WLPreset4: { label: 'W/L Preset 4 (Brain)', command: '5' },
        WLPreset5: { label: 'W/L Preset 5', command: '6' },
        WLPreset6: { label: 'W/L Preset 6', command: '7' },
        WLPreset7: { label: 'W/L Preset 7', command: '8' },
        WLPreset8: { label: 'W/L Preset 8', command: '9' },
        WLPreset9: { label: 'W/L Preset 0', command: '0' }
      },

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
    if (!hotKeys[toolKey]) {
      debugger;
    }
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

  onInputKeyUp() {}

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
      // alert('conflicted command ' + JSON.stringify(conflictedCommand));
      // TODO: popover w/ confirmation
      this.updateErrorsState(toolKey, 'Conflicted');

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
              ${this.state.errorMessages[toolKey] ? 'state-error' : ''}`}
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
