import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={color}
    >
      <title id="title">{title}</title>
      <path d="M9,0 a9 9 0 0 1 0 18 a9 9 0 0 1 0 -18 M4.5,8 a1.5 1.5 0 0 0 0 3 a1.5 1.5 0 0 0 0 -3 M9,8 a1.5 1.5 0 0 0 0 3 a1.5 1.5 0 0 0 0 -3  M13.5,8 a1.5 1.5 0 0 0 0 3 a1.5 1.5 0 0 0 0 -3" />
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
  title: 'More',
}

export default Icon
