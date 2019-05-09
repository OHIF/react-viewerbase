import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './select.css'

class Select extends Component {
  state = {
    open: false,
  }

  static propTypes = {
    titleElement: PropTypes.node,
    title: PropTypes.string,
    align: PropTypes.oneOf(['left', 'center', 'right']),
    /** Items to render in the select's drop down */
    list: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        icon: PropTypes.string,
        onClick: PropTypes.func,
        link: PropTypes.string,
      })
    ),
  }

  getListItems = () => {
    const { list, align } = this.props

    return list.map(({ icon, title, link, onClick }, key) => {
      if (link) {
        return (
          <a
            href={link || '#'}
            key={key}
            className="dd-item"
            onClick={() => this.handleOnClick(onClick)}
          >
            {icon && <span className={`dd-item-icon ${icon}`} />}
            <span>{title}</span>
          </a>
        )
      } else {
        return (
          <button
            key={key}
            className="dd-item"
            onClick={() => this.handleOnClick(onClick)}
          >
            {icon && <span className={`dd-item-icon ${icon}`} />}
            <span>{title}</span>
          </button>
        )
      }
    })
  }

  renderList = () => {
    const { align } = this.props

    if (!this.state.open) {
      return null
    }

    return (
      <div className={`dd-menu-list ${align || 'left'}`}>
        {this.getListItems()}
      </div>
    )
  }

  handleOnClick = onClick => {
    this.toggleList()

    if (onClick) {
      onClick()
    }
  }

  handleMouseClick = e => {
    if (this.node.contains(e.target)) {
      return
    }

    this.toggleList()
  }

  renderTitleElement = () => {
    const { titleElement, title } = this.props

    if (titleElement) {
      return titleElement
    }

    return (
      <React.Fragment>
        <span className="dd-title">{title}</span>
        <span className="dd-caret-down" />
      </React.Fragment>
    )
  }

  toggleList = () => {
    const { open } = this.state
    let state = true

    document.addEventListener('mousedown', this.handleMouseClick, false)

    if (open) {
      document.removeEventListener('mousedown', this.handleMouseClick, false)
      state = false
    }

    this.setState({
      open: state,
    })
  }

  render() {
    return (
      <div className="dd-menu" ref={node => (this.node = node)}>
        <div className="dd-menu-toggle" onClick={this.toggleList}>
          {this.renderTitleElement()}
        </div>

        {this.renderList()}
      </div>
    )
  }
}

export { Select }
