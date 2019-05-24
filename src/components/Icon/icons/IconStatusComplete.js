import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { fill, width, height } = props

  return (
    <svg
      className="icon-status-complete"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27 27"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={fill}
    >
      <title id="title">Status Complete</title>
      <path d="M13.5,0 a13.5 13.5 0 0 1 0 27 a13.5 13.5 0 0 1 0 -27 M23,8 l-2,-2 -10,10, -5,-5 -2,2 7,7Z" />
    </svg>
  )
}

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

Icon.defaultProps = {
  width: 27,
  height: 27,
  fill: 'black',
}

export default Icon
