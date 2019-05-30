import './toolbar-button.styl';

import { Icon } from './../elements/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

export function ToolbarButton(props) {
  const { active, icon, textActive, onClick, setToolActive } = props;
  const className = classnames(props.className, { active });
  const iconProps = typeof icon === 'string' ? { name: icon } : icon;
  const label = active && textActive ? textActive : props.text;

  const arrowIconName = props.expanded ? 'caret-up' : 'caret-down';
  const arrowIcon = props.expandableButton && (
    <Icon name={arrowIconName} className="expand-caret" />
  );

  const handleClick = event => {
    if (onClick) {
      onClick(event, props);
    }

    if (setToolActive) {
      setToolActive(props);
    }
  };

  return (
    <div className={className} onClick={handleClick}>
      {iconProps && <Icon {...iconProps} />}
      <div className="toolbar-button-label">
        {label}
        {arrowIcon}
      </div>
    </div>
  );
}

ToolbarButton.propTypes = {
  active: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textActive: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ]),
  onClick: PropTypes.func,
  setToolActive: PropTypes.func,
  expandableButton: PropTypes.bool,
  expanded: PropTypes.bool,
};

ToolbarButton.defaultProps = {
  active: false,
  className: 'toolbar-button',
  command: 'ToolbarButton',
};

export default ToolbarButton;
