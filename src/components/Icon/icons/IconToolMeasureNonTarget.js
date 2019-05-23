import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { fill, width, height } = props

  return (
    <svg
      className="icon-tool-measure-non-target"
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
      <title id="title">Measure Non Target</title>
      <circle
        id="icon-tools-measure-non-target-circle"
        cx="6.5"
        cy="6.5"
        r="6"
      />
      <path
        id="icon-tools-measure-non-target-plus"
        d="M6.5,3 l0,7 M3,6.5 l7,0"
      />
      <path
        id="icon-tools-measure-non-target-arrow"
        d="M23,7 l-15,15 M7,17 l0,6 6,0"
        strokeWidth="2"
      />
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
