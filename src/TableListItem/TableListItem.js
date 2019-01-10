import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import './TableListItem.styl';

class TableListItem extends Component {
  render() {
    return (
      <div
        className={`tableListItem ${this.props.itemClass}`}
        onClick={this.onItemClick}
      >
        <div className="itemIndex">{this.props.itemIndex}</div>
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

TableListItem.propTypes = {
  children: PropTypes.node,
  itemClass: PropTypes.string,
  itemIndex: PropTypes.number,
  onItemClick: PropTypes.func.isRequired
};

export default TableListItem;
