import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { fill, width, height } = props

  return (
    <svg
      className="icon-tool-link"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23 15"
      aria-labelledby="title"
      stroke={fill}
      width={width}
      height={height}
      fill="none"
    >
      <title id="title">Link</title>
      <circle opacity="0.8" cx="7.5" cy="7.5" r="7.5" />
      <circle opacity="0.6" cx="15.5" cy="7.5" r="7.5" />
    </svg>
  )
}

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

Icon.defaultProps = {
  width: 23,
  height: 15,
  fill: 'black',
}

export default Icon
