import React, { PureComponent } from 'react';
import ToolbarButton from './ToolbarButton';
import './ToolbarSection.css';
import PropTypes from 'prop-types';

class ToolbarSection extends PureComponent {
  render() {
    const items = this.props.buttons.map((item, index) => {
      return (
        <ToolbarButton
          key={index}
          {...item}
          active={item.command === this.props.activeCommand}
          setToolActive={this.props.setToolActive}
        />
      );
    });

    return <div className={'ToolbarSection'}>{items}</div>;
  }
}
ToolbarSection.propTypes = {
  buttons: PropTypes.array.isRequired,
  activeCommand: PropTypes.string,
  setToolActive: PropTypes.func
};
export default ToolbarSection;
