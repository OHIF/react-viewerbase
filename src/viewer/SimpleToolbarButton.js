import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export function SimpleToolbarButton(props) {
  let className = classnames(props.className, 'btn btn-sm btn-default');
  return (
    <button
      id={props.id}
      type="button"
      className={className}
      data-container="body"
      data-toggle="tooltip"
      data-placement="bottom"
      title={props.title}
    >
      <span className={props.iconClassName} />
    </button>
  );
}

SimpleToolbarButton.propTypes = {
  iconClassName: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};
export default SimpleToolbarButton;
