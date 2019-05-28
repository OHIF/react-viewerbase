import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Icon } from './../components/Icon'
import './ToolbarButton.styl'

const arrowIconStyle = {
  width: '8px',
  height: '8px',
  transform: 'translate(2px, 2px)',
}

export function ToolbarButton(props) {
  const { active, icon, textActive, onClick, setToolActive } = props
  const className = classnames(props.className, { active })
  const iconProps = typeof icon === 'string' ? { name: icon } : icon
  const label = active && textActive ? textActive : props.text

  const arrowIcon = props.expanded ? (
    <Icon name="caret-up" style={arrowIconStyle} />
  ) : (
    <Icon name="caret-down" style={arrowIconStyle} />
  )

  const handleClick = event => {
    if (onClick) {
      onClick(event, props)
    }

    if (setToolActive) {
      setToolActive(props)
    }
  }

  return (
    <div className={className} onClick={handleClick}>
      {iconProps && <Icon {...iconProps} />}
      <div className="buttonLabel">
        <span className="toolbar-button-label">{label}</span>
        {props.expandableButton && arrowIcon}
      </div>
    </div>
  )
}

ToolbarButton.defaultProps = {
  active: false,
  className: 'ToolbarButton',
  command: 'ToolbarButton',
}

ToolbarButton.propTypes = {
  active: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textActive: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ]),
  onClick: PropTypes.func,
  setToolActive: PropTypes.func,
  expandableButton: PropTypes.bool,
  expanded: PropTypes.bool,
}

export default ToolbarButton
