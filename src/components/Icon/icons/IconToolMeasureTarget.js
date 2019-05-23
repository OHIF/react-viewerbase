import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { fill, width, height } = props

  return (
    <svg
      className="icon-tool-measure-target"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 26"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={fill}
      strokeWidth="0"
    >
      <title id="title">Measure Target</title>
      <path d="m9.5,26 2,-2 -1.5,-1.5 0.5,-0.5 1.5,1.5 1.5,-1.5 -2.5,-2.5 0.5,-0.5 2.5,2.5 1.5,-1.5 -1.5,-1.5 0.5,-0.5 1.5,1.5 1.5,-1.5 -2.5,-2.5 0.5,-0.5 2.5,2.5 1.5,-1.5 -1.5,-1.5 0.5,-0.5 1.5,1.5 1.5,-1.5 -2.5,-2.5 0.5,-0.5 2.5,2.5 1.5,-1.5 -1.5,-1.5 0.5,-0.5 1.5,1.5 2,-2 -4,-4 a2 2 0 0 0 -2.5 0 l-14 14 a2 2 0 0 0 0 2.5 l4,4 Z" />
      <path d="m6,0 a6 6 0 0 1 0 12 a6 6 0 0 1 0 -12 m0.5,3 a0.5 0.5 0 0 0 -1 0 l0,2.5 -2.5,0 a0.5 0.5 0 0 0 0 1 l2.5,0 0,2.5 a0.5 0.5 0 0 0 1 0 l0,-2.5 2.5,0 a0.5 0.5 0 0 0 0 -1 l-2.5,0 z" />
    </svg>
  )
}

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

Icon.defaultProps = {
  width: 26,
  height: 26,
  fill: 'black',
}

export default Icon
