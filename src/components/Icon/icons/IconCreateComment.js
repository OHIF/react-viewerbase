import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, secondaryColor, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 37 34"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={color}
    >
      <title id="title">{title}</title>
      <path
        fill={secondaryColor}
        d="M22.32 14L35 14C36.1 14 37 14.9 37 16L37 28C37 29.1 36.1 30 35 30L21 30 17 34 17 20.39C19.45 18.97 21.36 16.71 22.32 14Z"
      />
      <path d="M10 0C4.5 0 0 4.5 0 10 0 15.5 4.5 20 10 20 15.5 20 20 15.5 20 10 20 4.5 15.5 0 10 0L10 0ZM15 11L11 11 11 15 9 15 9 11 5 11 5 9 9 9 9 5 11 5 11 9 15 9 15 11 15 11Z" />
    </svg>
  )
}

Icon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string,
  title: PropTypes.string,
}

Icon.defaultProps = {
  title: 'Create Comment',
  secondaryColor: '#94a8b3',
}

export default Icon
