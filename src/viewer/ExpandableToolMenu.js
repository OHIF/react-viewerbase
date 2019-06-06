import './ExpandableToolMenu.styl';

import { OverlayTrigger } from '../components/overlayTrigger';
import PropTypes from 'prop-types';
import React from 'react';
import ToolbarButton from './ToolbarButton.js';
import { Tooltip } from '../components/tooltip';

export default class ExpandableToolMenu extends React.Component {
  static propTypes = {
    /** Button label/text */
    text: PropTypes.string.isRequired,
    /** Array of buttons to render when expanded */
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        command: PropTypes.string,
        text: PropTypes.string.isRequired,
        icon: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({
            name: PropTypes.string.isRequired,
          }),
        ]),
      })
    ).isRequired,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ]),
    onGroupMenuClick: PropTypes.func,
    activeCommand: PropTypes.string,
    setToolActive: PropTypes.func,
  };

  static defaultProps = {
    buttons: [],
    icon: 'ellipse-circle',
    text: 'More',
  };

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toolbarMenuOverlay = () => (
    <Tooltip placement="bottom" className="tooltip-toolbar-overlay">
      {this.getButtons()}
    </Tooltip>
  );

  getButtons = () => {
    return this.props.buttons.map((item, index) => {
      return (
        <ToolbarButton
          key={index}
          {...item}
          active={item.command === this.props.activeCommand}
          setToolActive={this.props.setToolActive}
        />
      );
    });
  };

  isActive = () => {
    let isActive = false;
    if (this.props.activeCommand) {
      this.props.buttons.forEach(button => {
        if (this.props.activeCommand === button.command) {
          isActive = true;
        }
      });
    }

    return isActive;
  };

  onExpandableToolClick = () => {
    if (this.props.onGroupMenuClick) {
      this.props.onGroupMenuClick();
    }
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  onOverlayHide = () => {
    this.setState({
      expanded: false,
    });
  };

  render() {
    return (
      <OverlayTrigger
        key="menu-button"
        trigger="click"
        placement="bottom"
        rootClose={true}
        handleHide={this.onOverlayHide}
        onClick={this.onExpandableToolClick}
        overlay={this.toolbarMenuOverlay()}
      >
        <ToolbarButton
          key="menu-button"
          command="More"
          type="tool"
          text={this.props.text}
          icon={this.props.icon}
          className={'toolbar-button expandableToolMenu'}
          active={this.isActive()}
          expandableButton={true}
          expanded={this.state.expanded}
        />
      </OverlayTrigger>
    );
  }
}
