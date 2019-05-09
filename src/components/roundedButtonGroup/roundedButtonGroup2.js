import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './roundedButtonGroup.css'

// TODO: Rename to Toggle?
class RoundedButtonGroup extends Component {
  static className = 'RoundedButtonGroup'

  static propTypes = {
    options: PropTypes.array,
    value: PropTypes.string,
    onValueChanged: PropTypes.func,
  }

  static defaultProps = {
    options: [],
    value: null,
  }

  onClickOption = value => {
    let newValue = value
    if (this.props.value === value) {
      newValue = null
    }

    if (this.props.onValueChanged) {
      this.props.onValueChanged(newValue)
    }
  }

  render() {
    let className = classnames(
      RoundedButtonGroup.className,
      'clearfix center-table'
    )

    const buttons = this.props.options.map((option, index) => {
      const className = classnames({
        roundedButtonWrapper: true,
        noselect: true,
        active: this.props.value === option.value,
      })

      let optionSVG
      if (option.svgLink) {
        const svgStyle = {
          width: `${option.svgWidth}px`,
          height: `${option.svgHeight}px`,
        }
        optionSVG = (
          <svg style={svgStyle}>
            <use xlinkHref={option.svgLink} />
          </svg>
        )
      }

      const optionText = option.text && <span>{option.text}</span>

      const optionIcon = option.iconClasses && (
        <i className={option.iconClasses} />
      )

      const bottomLabel = option.bottomLabel && (
        <div className="bottomLabel">{option.bottomLabel}</div>
      )

      return (
        <div
          key={index}
          className={className}
          onClick={() => this.onClickOption(option.value)}
        >
          <div className="roundedButton">
            {optionSVG}
            {optionText}
            {optionIcon}
          </div>
          {bottomLabel}
        </div>
      )
    })

    return <div className={className}>{buttons}</div>
  }
}

export { RoundedButtonGroup }
