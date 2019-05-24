import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { fill, width, height } = props

  return (
    <svg
      className="icon-studies"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 13"
      aria-labelledby="title"
      width={width}
      height={height}
      stroke="none"
      fill={fill}
    >
      <title id="title">Studies</title>
      <path d="M0,0 7,0 7,6 0,6Z M8,0 15,0 15,6 8,6Z M0,7 7,7 7,13 0,13Z M8,7 15,7 15,13 8,13Z" />
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
