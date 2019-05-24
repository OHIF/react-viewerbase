import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { fill, width, height } = props

  return (
    <svg
      className="icon-tool-level"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={fill}
    >
      <title id="title">Level</title>
      <path d="M14.5,3.5 a1 1 0 0 1 -11,11 Z" stroke="none" opacity="0.8" />
      <circle cx="9" cy="9" r="8" fill="none" strokeWidth="2" />
    </svg>
  )
}

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

Icon.defaultProps = {
  width: 18,
  height: 18,
  fill: 'black',
}

export default Icon
