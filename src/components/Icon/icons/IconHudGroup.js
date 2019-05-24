import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 22"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title id="title">{title}</title>
      <path
        d="m14.5,2.75 2,0 a2.5 2.5 0 0 1 2.5 2.5 l0,13.25 a2.5 2.5 0 0 1 -2.5 2.5 l-11.5,0 a2.5 2.5 0 0 1 -2.5 -2.5 l0,-1"
        strokeDasharray="1,3"
      />
      <path d="m0.5,2 0,14 a1.5 1.5 0 0 0 1.5 1.5 l12,0 a1.5 1.5 0 0 0 1.5 -1.5 l0,-14" />
      <path d="m2,2 12,0" strokeWidth="4" />
      <path d="m4.4,7.5 7.2,0 m0,3 -7.2,0 m0,3 7.2,0" strokeLinecap="square" />
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
  title: 'Hud Group',
}

export default Icon
