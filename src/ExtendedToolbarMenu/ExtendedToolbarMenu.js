import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from '../basic/OverlayTrigger.js';
import ToolbarSection from '../viewer/ToolbarSection.js';
import ToolbarButton from '../viewer/ToolbarButton.js';

import './ExtendedToolbarMenu.styl';

const menuButtonData = {
  command: 'More',
  type: 'tool',
  text: 'More',
  svgUrl: '/icons.svg#icon-tools-more'
};

class ExtendedToolbarMenu extends React.Component {
  static propTypes = {
    buttons: PropTypes.array.isRequired
  };

  static defaultProps = {
    buttons: {}
  };

  constructor(props) {
    super(props);

    this.state = {
      activeCommand: 'length'
    };
  }

  render() {
    return (
      <OverlayTrigger
        key="menu-button"
        placement="bottom"
        trigger="click"
        overlay={
          <ToolbarSection
            buttons={this.props.buttons}
            activeCommand={this.state.activeCommand}
            setToolActive={toolProps => {
              this.setState((state, props) => {
                return { activeCommand: toolProps.command };
              });
            }}
          />
        }
      >
        <ToolbarButton
          key="menu-button"
          {...menuButtonData}
          active={menuButtonData.command === this.props.activeCommand}
        />
      </OverlayTrigger>
    );
  }
}

export default ExtendedToolbarMenu;
