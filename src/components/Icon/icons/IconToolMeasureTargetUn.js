import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { fill, width, height } = props

  return (
    <svg
      className="icon-tool-measure-target-un"
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
      <title id="title">Measure Target UN</title>
      <text
        fill="#000000"
        x="0"
        y="8"
        style={{ fontSize: '10px', fontFamily: 'sans-serif' }}
      >
        UN
      </text>
      <path d="M23,7 l-15,15 M7,17 l0,6 6,0" strokeWidth="2" />
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
