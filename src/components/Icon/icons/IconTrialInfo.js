import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      aria-labelledby="title"
      width={width}
      height={height}
      stroke={color}
      fill="none"
      strokeWidth="2"
    >
      <title id="title">{title}</title>
      <path d="M10,1 a9 9 0 0 1 0 18 a9 9 0 0 1 0 -18 M10,5 l0,2 m0,2 0,6" />
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
  title: 'Trial Info',
}

export default Icon
