import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import './TableListItem.styl';

class TableListItem extends Component {
  render() {
    return (
      <div
        key={this.props.itemKey}
        className={`tableListItem ${this.props.itemClass}`}
        onClick={this.onItemClick}
      >
        <div className="itemIndex">{this.props.itemIndex}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }

  onItemClick = event => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.classList.togle('selected');

    if (this.props.onItemClick) {
      this.props.onItemClick(event, this.props);
    }
  };
}

TableListItem.propTypes = {
  itemKey: PropTypes.string.isRequired,
  itemClass: PropTypes.string,
  itemIndex: PropTypes.string,
  onItemClick: PropTypes.func.isRequired
};

export default TableListItem;
