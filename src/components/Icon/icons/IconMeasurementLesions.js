import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 10"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={color}
    >
      <title id="title">{title}</title>
      <path d="M0,0 2,0 2,2 0,2Z M4,0 18,0 18,2 4,2Z M0,4 2,4 2,6 0,6Z M4,4 18,4 18,6 4,6Z M0,8 2,8 2,10 0,10Z M4,8 18,8 18,10 4,10Z" />
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
  title: 'Measurement Lesions',
}

export default Icon
