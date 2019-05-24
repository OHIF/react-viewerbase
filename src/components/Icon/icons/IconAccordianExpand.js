import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 9"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={color}
    >
      <title id="title">{title}</title>
      <polygon
        transform="translate(6.000000, 3.700000) rotate(-270.000000) translate(-6.000000, -3.700000) "
        points="3.7 -2.3 2.3 -0.9 6.9 3.7 2.3 8.3 3.7 9.7 9.7 3.7"
      />
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
  title: 'Accordian Expand',
}

export default Icon
