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
      <text
        fill="#000000"
        x="0"
        y="8"
        style={{ fontSize: '10px', fontFamily: 'sans-serif' }}
      >
        CR
      </text>
      <path d="M23,7 l-15,15 M7,17 l0,6 6,0" strokeWidth="2" />
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
  title: 'Measure Target CR',
}

export default Icon
