import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      aria-labelledby="title"
      width={width}
      height={height}
      stroke={color}
      strokeWidth="1.75"
    >
      <title id="title">{title}</title>
      <path id="icon-ui-close-path" d="M1,1 13,13 M1,13 13,1" />
    </svg>
  )
}

Icon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string,
}

Icon.defaultProps = {
  title: 'Close',
}

export default Icon
