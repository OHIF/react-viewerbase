import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 28"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={color}
    >
      <title id="title">{title}</title>
      <path d="M24 14c0 6.609-5.391 12-12 12s-12-5.391-12-12c0-3.797 1.75-7.297 4.797-9.578 0.891-0.672 2.141-0.5 2.797 0.391 0.672 0.875 0.484 2.141-0.391 2.797-2.031 1.531-3.203 3.859-3.203 6.391 0 4.406 3.594 8 8 8s8-3.594 8-8c0-2.531-1.172-4.859-3.203-6.391-0.875-0.656-1.062-1.922-0.391-2.797 0.656-0.891 1.922-1.062 2.797-0.391 3.047 2.281 4.797 5.781 4.797 9.578zM14 2v10c0 1.094-0.906 2-2 2s-2-0.906-2-2v-10c0-1.094 0.906-2 2-2s2 0.906 2 2z" />
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
  title: 'Logout',
}

export default Icon
