import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

class SelectTreeBreadcrumb extends Component {
  render() {
    return (
      <div className="selectTreeBreadcrumb">
        <label
          className="wrapperLabel radioLabel"
          htmlFor="selectTreeBreadcrumb"
        >
          <input
            type="radio"
            id="selectTreeBreadcrumb"
            className="treeNode radioInput"
            value={this.props.value}
            onChange={this.props.onSelected}
          />
          <span className="wrapperText">
            <span className="backIcon">
              <svg>
                <use xlinkHref="/icons.svg#fast-backward" />
              </svg>
            </span>
            {this.props.label}
          </span>
        </label>
      </div>
    );
  }
}

SelectTreeBreadcrumb.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired
};

export default SelectTreeBreadcrumb;
