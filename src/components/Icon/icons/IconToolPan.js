import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      aria-labelledby="title"
      stroke={color}
      width={width}
      height={height}
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title id="title">{title}</title>
      <path id="icon-tools-pan-line-v" d="M9,1 L9,17" />
      <path id="icon-tools-pan-line-h" d="M1,9 L17,9" />
      <polyline id="icon-tools-pan-caret-t" points="7 3 9 1 11 3" />
      <polyline id="icon-tools-pan-caret-r" points="15 11 17 9 15 7" />
      <polyline id="icon-tools-pan-caret-b" points="11 15 9 17 7 15" />
      <polyline id="icon-tools-pan-caret-l" points="3 7 1 9 3 11" />
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
  title: 'Pan',
}

export default Icon
