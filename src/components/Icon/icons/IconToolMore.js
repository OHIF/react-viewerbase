import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { fill, width, height } = props

  return (
    <svg
      className="icon-tool-more"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={fill}
    >
      <title id="title">More</title>
      <path d="M9,0 a9 9 0 0 1 0 18 a9 9 0 0 1 0 -18 M4.5,8 a1.5 1.5 0 0 0 0 3 a1.5 1.5 0 0 0 0 -3 M9,8 a1.5 1.5 0 0 0 0 3 a1.5 1.5 0 0 0 0 -3  M13.5,8 a1.5 1.5 0 0 0 0 3 a1.5 1.5 0 0 0 0 -3" />
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
