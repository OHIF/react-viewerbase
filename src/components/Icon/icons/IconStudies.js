import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 13"
      aria-labelledby="title"
      width={width}
      height={height}
      stroke="none"
      fill={color}
    >
      <title id="title">{title}</title>
      <path d="M0,0 7,0 7,6 0,6Z M8,0 15,0 15,6 8,6Z M0,7 7,7 7,13 0,13Z M8,7 15,7 15,13 8,13Z" />
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
  title: 'Studies',
}
export default Icon
