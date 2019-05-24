import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-labelledby="title"
      width={width}
      height={height}
      stroke={color}
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title id="title">{title}</title>
      <circle
        id="icon-tools-measure-non-target-circle"
        cx="6.5"
        cy="6.5"
        r="6"
      />
      <path
        id="icon-tools-measure-non-target-plus"
        d="M6.5,3 l0,7 M3,6.5 l7,0"
      />
      <path
        id="icon-tools-measure-non-target-arrow"
        d="M23,7 l-15,15 M7,17 l0,6 6,0"
        strokeWidth="2"
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
  title: 'Measure Non Target',
}

export default Icon
