import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import './ToolbarButton.css';

class ToolbarButton extends Component {
  render() {
    return (
      <div
        className={`ToolbarButton ${this.props.active && ' active'}`}
        onClick={this.onClick}
      >
        <svg>
          <use xlinkHref={this.props.svgUrl} />
        </svg>
        <span>{this.props.text}</span>
      </div>
    );
  }
  onClick = event => {
    if (this.props.setToolActive) {
      this.props.setToolActive(this.props.command);
    }
    this.props.onClick(this.props.command);
  };
}
ToolbarButton.defaultProps = {
  command: 'ToolbarButton',
  onClick: function() {
    console.log(`ToolbarButton does not have an onClick event`);
  }
};

ToolbarButton.propTypes = {
  text: PropTypes.string.isRequired,
  svgUrl: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ToolbarButton;
