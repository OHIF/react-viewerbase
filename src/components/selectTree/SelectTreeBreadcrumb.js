import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

export default class SelectTreeBreadcrumb extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onSelected: PropTypes.func.isRequired,
  };

  render() {
    const config = window.config || {};
    const routerBaseName = config.routerBaseName || '';
    const Icons = `${routerBaseName}/icons.svg`.replace('//', '/');

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
                <use xlinkHref={`${Icons}#fast-backward`} />
              </svg>
            </span>
            {this.props.label}
          </span>
        </label>
      </div>
    );
  }
}
