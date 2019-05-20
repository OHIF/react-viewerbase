import React from 'react'
import PropTypes from 'prop-types'
import { OverlayTrigger } from '../components/overlayTrigger'
import { Tooltip } from '../components/tooltip'
import ToolbarButton from './ToolbarButton.js'

import './ExpandableToolMenu.styl'

export default class ExpandableToolMenu extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    svgUrl: PropTypes.string,
    buttons: PropTypes.array.isRequired,
    activeCommand: PropTypes.string,
    setToolActive: PropTypes.func,
  }

  static defaultProps = {
    buttons: {},
    text: 'More',
  }

  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
  }

  toolbarMenuOverlay = () => (
    <Tooltip
      placement="bottom"
      className="tooltip-toolbar-overlay"
      id="tooltip-bottom"
    >
      {this.getButtons()}
    </Tooltip>
  )

  getButtons = () => {
    return this.props.buttons.map((item, index) => {
      return (
        <ToolbarButton
          key={index}
          {...item}
          active={item.command === this.props.activeCommand}
          setToolActive={this.props.setToolActive}
        />
      )
    })
  }

  getMenuSvgUrl = () => {
    const config = window.config || {}
    const routerBaseName = config.routerBaseName || ''
    const Icons = `${routerBaseName}/icons.svg`.replace('//', '/')

    let svgUrl = this.props.svgUrl || `${Icons}#icon-tools-more`
    if (this.props.activeCommand) {
      this.props.buttons.forEach(button => {
        if (this.props.activeCommand === button.command) {
          svgUrl = button.svgUrl
        }
      })
    }
    return svgUrl
  }

  isActive = () => {
    let isActive = false
    if (this.props.activeCommand) {
      this.props.buttons.forEach(button => {
        if (this.props.activeCommand === button.command) {
          isActive = true
        }
      })
    }

    return isActive
  }

  onExpandableToolClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  onOverlayHide = () => {
    this.setState({
      expanded: false,
    })
  }

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
          svgUrl={this.getMenuSvgUrl()}
          className={'ToolbarButton expandableToolMenu'}
          active={this.isActive()}
          expandableButton={true}
          expanded={this.state.expanded}
        />
      </OverlayTrigger>
    )
  }
}
