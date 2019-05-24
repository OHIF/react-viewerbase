import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 13"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={color}
    >
      <title id="title">{title}</title>
      <path d="M6.5 7L6.5 12C6.5 12.28 6.28 12.5 6 12.5 5.72 12.5 5.5 12.28 5.5 12L5.5 7 0.5 7C0.22 7 0 6.78 0 6.5 0 6.22 0.22 6 0.5 6L5.5 6 5.5 1C5.5 0.72 5.72 0.5 6 0.5 6.28 0.5 6.5 0.72 6.5 1L6.5 6 11.5 6C11.78 6 12 6.22 12 6.5 12 6.78 11.78 7 11.5 7L6.5 7Z" />
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
  title: 'Add',
}

export default Icon
