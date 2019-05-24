import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 15"
      aria-labelledby="title"
      stroke={color}
      width={width}
      height={height}
      fill="none"
    >
      <title id="title">{title}</title>
      <g transform="translate(1.0000, 1.000)">
        <circle opacity="0.8" cx="7.5" cy="7.5" r="7.5" />
        <circle opacity="0.6" cx="15.5" cy="7.5" r="7.5" />
      </g>
    </svg>
  )
}

Icon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string,
}

Icon.defaultProps = {
  title: 'Link',
}

export default Icon
