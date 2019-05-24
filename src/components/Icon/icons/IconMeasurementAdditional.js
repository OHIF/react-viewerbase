import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={color}
    >
      <title id="title">{title}</title>
      <path d="M11,2 l1.85,-1.85 a1 1 0 0 1 1,0 l2,2 a1 1 0 0 1 0,1 l-1.85,1.85Z  M10,3 l-10,10 0,3 3,0 10,-10Z M16,16 l0,-2 -9,0 -2,2Z" />
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
  title: 'Measurement Additional',
}

export default Icon
