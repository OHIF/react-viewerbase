import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { fill, width, height } = props

  return (
    <svg
      className="icon-tool-zoom"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 17"
      aria-labelledby="title"
      stroke={fill}
      width={width}
      height={height}
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <title id="title">Zoom</title>
      <path d="m11.5,11.5 4.5,4.5" />
      <circle cx="7" cy="7" r="6" />
    </svg>
  )
}

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

Icon.defaultProps = {
  width: 17,
  height: 17,
  fill: 'black',
}

export default Icon
