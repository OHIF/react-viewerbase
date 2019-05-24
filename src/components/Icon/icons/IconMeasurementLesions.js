import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { fill, width, height } = props

  return (
    <svg
      className="icon-measurement-lesions"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 10"
      aria-labelledby="title"
      width={width}
      height={height}
      fill={fill}
    >
      <title id="title">Measurement Lesions</title>
      <path d="M0,0 2,0 2,2 0,2Z M4,0 18,0 18,2 4,2Z M0,4 2,4 2,6 0,6Z M4,4 18,4 18,6 4,6Z M0,8 2,8 2,10 0,10Z M4,8 18,8 18,10 4,10Z" />
    </svg>
  )
}

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

Icon.defaultProps = {
  width: 18,
  height: 10,
  fill: 'black',
}

export default Icon
