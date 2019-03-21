import React, { PureComponent } from 'react';
import ToolbarButton from './ToolbarButton';
import ExpandableToolMenu from './ExpandableToolMenu';
import classnames from 'classnames';
import './ToolbarSection.styl';
import PropTypes from 'prop-types';

class ToolbarSection extends PureComponent {
  render() {
    const items = this.props.buttons.map((item, index) => {
      if (item.buttons && Array.isArray(item.buttons)) {
        return (
          <ExpandableToolMenu
            key={`expandable-${index}`}
            {...item}
            activeCommand={this.props.activeCommand}
            setToolActive={this.props.setToolActive}
          />
        );
      } else {
        return (
          <ToolbarButton
            key={index}
            {...item}
            active={item.command === this.props.activeCommand}
            setToolActive={this.props.setToolActive}
          />
        );
      }
    });

    return (
      <div className={classnames('ToolbarSection', this.props.className)}>
        {items}
      </div>
    );
  }
}

ToolbarSection.defaultProps = {
  className: ''
};

ToolbarSection.propTypes = {
  buttons: PropTypes.array.isRequired,
  className: PropTypes.string,
  activeCommand: PropTypes.string,
  setToolActive: PropTypes.func
};

export default ToolbarSection;
