import React, { Component } from 'react';
import Proptypes from 'prop-types';
import BrowserItem from './BrowserItem.js';

import './BrowserList.styl';

export default class BrowserList extends Component {
  static propTypes = {
    class: Proptypes.string,
    studyListData: Proptypes.array.isRequired,
    onClick: Proptypes.func.isRequired
  };

  render() {
    return (
      <div className={`browserList ${this.props.class}`}>
        {this.getBrowserItems()}
      </div>
    );
  }

  getBrowserItems = () => {
    return this.props.studyListData.map((studyData, index) => {
      return (
        <BrowserItem
          key={index}
          studyData={studyData}
          studyActive={true}
          onClick={event => this.props.onClick(studyData)}
        />
      );
    });
  };
}
