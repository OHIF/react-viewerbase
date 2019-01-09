import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import './TableList.styl';

class TableList extends Component {
  render() {
    return (
      <div className="tableList">
        <div className="header" onClick={this.onHeaderClick}>
          <h4 className="title">{this.props.headerTitle}</h4>
        </div>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

TableList.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default TableList;
