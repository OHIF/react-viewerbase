import React from 'react';
import PropTypes from 'prop-types';
import './ToolbarButton.styl';
import classnames from 'classnames';

export function ToolbarButton(props) {
  let onClick = event => {
    if (props.onClick) {
      props.onClick(event, props);
    }

    if (props.setToolActive) {
      props.setToolActive(props);
    }
  };

  const className = classnames(props.className, { active: props.active });
  const { active, svgUrlActive, iconClassesActive, textActive } = props;

  let svgUrl = props.svgUrl;
  if (active && svgUrlActive) {
    svgUrl = svgUrlActive;
  }

  let iconClasses = props.iconClasses;
  if (active && iconClassesActive) {
    iconClasses = iconClassesActive;
  }

  let label = props.text;
  if (active && textActive) {
    label = textActive;
  }

  return (
    <div className={className} onClick={onClick}>
      {svgUrl && (
        <svg>
          <use xlinkHref={svgUrl} />
        </svg>
      )}
      {iconClasses && <i className={iconClasses} />}
      <span className="toolbar-button-label">{label}</span>
    </div>
  );
}

ToolbarButton.defaultProps = {
  command: 'ToolbarButton',
  onClick: function() {
    //console.log(`ToolbarButton does not have an onClick event`);
  },
  className: 'ToolbarButton'
};

ToolbarButton.propTypes = {
  active: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textActive: PropTypes.string,
  iconClasses: PropTypes.string,
  iconClassesActive: PropTypes.string,
  svgUrl: PropTypes.string,
  svgUrlActive: PropTypes.string,
  onClick: PropTypes.func,
  setToolActive: PropTypes.func
};

export default ToolbarButton;
