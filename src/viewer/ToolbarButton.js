import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import './ToolbarButton.css';

class ToolbarButton extends Component {
  render() {
    return (
      <div
        className={this.props.active ? 'ToolbarButton active' : 'ToolbarButton'}
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
    const id = this.props.command;
    this.props.click(id);
  };
}

ToolbarButton.propTypes = {
  text: PropTypes.string.isRequired,
  svgUrl: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired
};

export default ToolbarButton;
