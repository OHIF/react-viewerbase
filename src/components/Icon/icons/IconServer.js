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
      <path d="M12 12c4.703 0 9.422-0.844 12-2.656v2.656c0 2.203-5.375 4-12 4s-12-1.797-12-4v-2.656c2.578 1.813 7.297 2.656 12 2.656zM12 24c4.703 0 9.422-0.844 12-2.656v2.656c0 2.203-5.375 4-12 4s-12-1.797-12-4v-2.656c2.578 1.813 7.297 2.656 12 2.656zM12 18c4.703 0 9.422-0.844 12-2.656v2.656c0 2.203-5.375 4-12 4s-12-1.797-12-4v-2.656c2.578 1.813 7.297 2.656 12 2.656zM12 0c6.625 0 12 1.797 12 4v2c0 2.203-5.375 4-12 4s-12-1.797-12-4v-2c0-2.203 5.375-4 12-4z" />
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
  title: 'Server',
}

export default Icon
