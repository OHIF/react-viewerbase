import React, { Component } from 'react';
import ToolbarButton from './ToolbarButton';
import './ToolbarSection.css';
import PropTypes from 'prop-types';

class ToolbarSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //this.setToolActive = this.setToolActive.bind(this);
  }
  componentDidMount() {}
  render() {
    const items = this.props.buttons.map((item, index) => {
      return (
        <ToolbarButton
          key={index}
          {...item}
          active={item.command === this.props.activeCommand}
        />
      );
    });
    return <div className={'ToolbarSection'}>{items}</div>;
  }
}
ToolbarSection.propTypes = {
  buttons: PropTypes.array.isRequired
};
export default ToolbarSection;
