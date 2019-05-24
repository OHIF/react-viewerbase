import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47 47"
      aria-labelledby="title"
      width={width}
      height={height}
      stroke={color}
      fill="none"
      strokeWidth="2.5"
      strokeMiterlimit="10"
    >
      <title id="title">{title}</title>
      <rect x="1.25" y="1.25" width="18.8" height="18.8" rx="1" ry="1" />
      <rect x="26" y="1.25" width="18.8" height="18.8" rx="1" ry="1" />
      <rect x="1.25" y="26" width="18.8" height="18.8" rx="1" ry="1" />
      <rect x="26" y="26" width="18.8" height="18.8" rx="1" ry="1" />
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
  title: 'OHIF Logo',
}

export default Icon
