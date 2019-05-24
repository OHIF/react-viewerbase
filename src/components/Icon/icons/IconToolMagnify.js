import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { fill, width, height } = props

  return (
    <svg
      className="icon-tool-magnify"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 28"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={fill}
    >
      <title id="title">Magnify</title>
      <path d="M24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12 12 5.375 12 12z" />
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
  height: 28,
  fill: 'black',
}

export default Icon
