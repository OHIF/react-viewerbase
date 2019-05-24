import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 xx xx"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={color}
    >
      <title id="title">{title}</title>
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
  title: 'xxx',
}

export default Icon
