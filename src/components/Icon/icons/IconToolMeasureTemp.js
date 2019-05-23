import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { fill, width, height } = props

  return (
    <svg
      className="icon-tool-measure-temp"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-labelledby="title"
      width={width}
      height={height}
      stroke={fill}
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title id="title">Measure Temp</title>
      <circle cx="6.5" cy="6.5" r="6" />
      <path d="M6.5,3 l0,7 M3,6.5 l7,0" />
      <path d="m22.5,6 -16.5,16.5" strokeWidth="3" strokeDasharray="0.6666,5" />
    </svg>
  )
}

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

Icon.defaultProps = {
  width: 24,
  height: 24,
  fill: 'black',
}

export default Icon
