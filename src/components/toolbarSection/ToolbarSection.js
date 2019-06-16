import './ToolbarSection.styl';

import React, { PureComponent } from 'react';

import ExpandableToolMenu from '../../viewer/ExpandableToolMenu';
import PropTypes from 'prop-types';
import ToolbarButton from '../../viewer/ToolbarButton';
import classnames from 'classnames';

class ToolbarSection extends PureComponent {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        icon: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({
            name: PropTypes.string.isRequired,
          }),
        ]),
        /** Optional: Expandable Tool Menu */
        buttons: PropTypes.arrayOf(PropTypes.shape({})),
      })
    ).isRequired,
    activeButtons: PropTypes.arrayOf(PropTypes.string).isRequired,
    /** Class for toolbar section container */
    className: PropTypes.string,
  };

  render() {
    const items = this.props.buttons.map((item, index) => {
      if (item.buttons && Array.isArray(item.buttons)) {
        return (
          <ExpandableToolMenu
            key={`expandable-${index}`}
            {...item}
            activeCommand={this.props.activeCommand}
          />
        );
      } else {
        return (
          <ToolbarButton
            key={index}
            {...item}
            active={item.command === this.props.activeCommand}
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

export { ToolbarSection };
