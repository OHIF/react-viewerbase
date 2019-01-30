import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import './TableListItem.styl';

export default class TableListItem extends Component {
  static propTypes = {
    children: PropTypes.node,
    itemClass: PropTypes.string,
    itemIndex: PropTypes.number,
    onItemClick: PropTypes.func.isRequired
  };

  render() {
    return (
      <div
        className={`tableListItem ${this.props.itemClass}`}
        onClick={this.onItemClick}
      >
        <div className="itemIndex">
          {this.props.itemIndex + 1}
          <span className="warning-icon">
            <svg>
              <use xlinkHref="/icons.svg#icon-ui-warning" />
            </svg>
          </span>
        </div>
        <div className="itemContent">{this.props.children}</div>
      </div>
    );
  }

  onItemClick = event => {
    if (this.props.onItemClick) {
      event.preventDefault();
      event.stopPropagation();

      this.props.onItemClick(event, this.props);
    }
  };
}
