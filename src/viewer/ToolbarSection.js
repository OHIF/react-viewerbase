import React, { Component } from 'react';
import ToolbarButton from './ToolbarButton.js';
import './ToolbarSection.css';
import PropTypes from 'prop-types';

class ToolbarSection extends Component {
  render() {
    const items = this.props.buttons.map((item, index) => {
      return <ToolbarButton key={index} {...item} click={this.onClick} />;
    });

    return (
      <div className={'ToolbarSection'}>{items}</div>
    );
  }

  onClick = id => {
    //const buttonItem = this.props.buttons.find(item => item.command === id);

    console.log(`clicked: ${id}`);
  };
}

ToolbarSection.propTypes = {
  buttons: PropTypes.array.isRequired,
  setToolActive: PropTypes.func.isRequired
};

export default ToolbarSection;
