import React from 'react';
import PropTypes from 'prop-types';
import './ToolbarButton.css';
import classnames from 'classnames';

export function ToolbarButton(props) {
  let onClick = event => {
    if (props.setToolActive) {
      props.setToolActive(props);
    }
  };
  let className = classnames(props.className, { active: props.active });
  return (
    <div className={className} onClick={onClick}>
      <svg>
        <use xlinkHref={props.svgUrl} />
      </svg>
      <span>{props.text}</span>
    </div>
  );
}

ToolbarButton.defaultProps = {
  command: 'ToolbarButton',
  onClick: function() {
    console.log(`ToolbarButton does not have an onClick event`);
  },
  className: 'ToolbarButton'
};

ToolbarButton.propTypes = {
  text: PropTypes.string.isRequired,
  svgUrl: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  mouseButtonMask: PropTypes.number.isRequired,
  setToolActive: PropTypes.func.isRequired
};

export default ToolbarButton;
