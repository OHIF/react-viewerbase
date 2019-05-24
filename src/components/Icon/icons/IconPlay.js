import React from 'react'
import PropTypes from 'prop-types'

/**
 * https://github.com/FortAwesome/Font-Awesome/blob/master/svgs/solid/play.svg
 */
function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={color}
    >
      <title id="title">{title}</title>
      <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
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
  title: 'Play',
}

export default Icon
