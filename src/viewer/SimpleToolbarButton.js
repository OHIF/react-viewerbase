import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Icon } from './../components/Icon'

export function SimpleToolbarButton(props) {
  const className = classnames(props.className, 'btn btn-sm btn-default')

  return (
    <button
      id={props.id}
      type="button"
      className={className}
      data-container="body"
      data-toggle="tooltip"
      data-placement="bottom"
      title={props.title}
    >
      {props.icon && <Icon name={props.icon} />}
    </button>
  )
}

SimpleToolbarButton.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
}
export default SimpleToolbarButton
