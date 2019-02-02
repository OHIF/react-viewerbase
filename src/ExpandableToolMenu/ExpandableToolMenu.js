import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from '../basic/OverlayTrigger.js';
import Tooltip from '../basic/Tooltip.js';
import ToolbarSection from '../viewer/ToolbarSection.js';
import ToolbarButton from '../viewer/ToolbarButton.js';

import './ExpandableToolMenu.styl';

class ExpandableToolMenu extends React.Component {
  static propTypes = {
    buttons: PropTypes.array.isRequired,
    activeCommand: PropTypes.string,
    onToolSelected: PropTypes.func
  };

  static defaultProps = {
    buttons: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  toolbarMenuOverlay = () => (
    <Tooltip
      placement="bottom"
      className="tooltip-toolbar-overlay"
      id="tooltip-bottom"
    >
      <ToolbarSection
        buttons={this.props.buttons}
        className="toolbarOverlay"
        activeCommand={this.props.activeCommand}
        setToolActive={toolProps => {
          if (this.props.onToolSelected) {
            this.props.onToolSelected(toolProps.command);
          }
        }}
      />
    </Tooltip>
  );

  getMenuSvgUrl = () => {
    let svgUrl = '/icons.svg#icon-tools-more';
    if (this.props.activeCommand) {
      this.props.buttons.forEach(button => {
        if (this.props.activeCommand === button.command) {
          svgUrl = button.svgUrl;
        }
      });
    }
    return svgUrl;
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
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    return (
      <OverlayTrigger
        key="menu-button"
        trigger="click"
        placement="bottom"
        rootClose={true}
        onClick={this.onExpandableToolClick}
        overlay={this.toolbarMenuOverlay()}
      >
        <ToolbarButton
          key="menu-button"
          command="More"
          type="tool"
          text="More"
          svgUrl={this.getMenuSvgUrl()}
          className={'ToolbarButton expandableToolMenu'}
          active={this.isActive()}
          expandableButton={true}
          expanded={this.state.expanded}
        />
      </OverlayTrigger>
    );
  }
}

export default ExpandableToolMenu;
