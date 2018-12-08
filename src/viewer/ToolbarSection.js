import React, { Component } from 'react';
import ToolbarButton from './ToolbarButton';
import './ToolbarSection.css';
import PropTypes from 'prop-types';

class ToolbarSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCommand: null
    };
    this.setToolActive = this.setToolActive.bind(this);
  }
  setToolActive(activeCommand) {
    //toolbar section should able to handle which btn  is active  unless its pass to it
    if (this.props.setToolActive) {
      this.props.setToolActive(activeCommand);
    } else {
      this.setState({
        activeCommand: activeCommand
      });
    }
  }
  componentDidMount() {
    if (this.props.buttons && this.state.activeCommand === null) {
      let activeButtons = this.props.buttons.filter(btn => {
        return btn.active;
      });
      //get  the first active button
      if (activeButtons.length > 0) {
        this.setState({
          activeCommand: activeButtons[0].command
        });
      }
    }
  }
  render() {
    const items = this.props.buttons.map((item, index) => {
      return (
        <ToolbarButton
          key={index}
          {...item}
          active={item.command === this.state.activeCommand}
          setToolActive={this.setToolActive}
        />
      );
    });

    return <div className={'ToolbarSection'}>{items}</div>;
  }
  onClick = id => {
    //default click
    //const buttonItem = this.props.buttons.find(item => item.command === id);
    console.log(
      `btn clicked and there is no event handler for this btn: ${id}`
    );
  };
}
ToolbarSection.propTypes = {
  buttons: PropTypes.array.isRequired,
  setToolActive: PropTypes.func
};
export default ToolbarSection;
