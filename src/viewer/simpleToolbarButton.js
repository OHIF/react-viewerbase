import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SimpleToolbarButton extends Component {
  render() {
    return (
      <button
        id={this.props.id}
        type="button"
        className="{this.props.classes} btn btn-sm btn-default"
        data-container="body"
        data-toggle="tooltip"
        data-placement="bottom"
        title={this.props.title}
      >
        <span className={this.props.iconClasses} />
      </button>
    );
  }
}

SimpleToolbarButton.propTypes = {
  iconClasses: PropTypes.string,
  classes: PropTypes.string,
  id: PropTypes.string
};
