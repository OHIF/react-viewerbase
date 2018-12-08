import React from 'react';
import PropTypes from 'prop-types';

export function SimpleToolbarButton(props) {
  return (
    <button
      id={props.id}
      type="button"
      className={`${props.classes} btn btn-sm btn-default`}
      data-container="body"
      data-toggle="tooltip"
      data-placement="bottom"
      title={props.title}
    >
      <span className={props.iconClasses} />
    </button>
  );
}

SimpleToolbarButton.propTypes = {
  iconClasses: PropTypes.string,
  classes: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func
};
export default SimpleToolbarButton;
