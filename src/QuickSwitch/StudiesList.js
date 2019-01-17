import React, { Component } from 'react';
import Proptypes from 'prop-types';
import StudiesItem from './StudiesItem.js';

import './StudiesList.styl';

export default class StudiesList extends Component {
  static propTypes = {
    class: Proptypes.string,
    studyListData: Proptypes.array.isRequired,
    onClick: Proptypes.func.isRequired
  };

  render() {
    return (
      <div className={`studiesList ${this.props.class}`}>
        {this.getBrowserItems()}
      </div>
    );
  }

  getBrowserItems = () => {
    return this.props.studyListData.map((studyData, index) => {
      return (
        <StudiesItem
          key={index}
          studyData={studyData}
          studyActive={true}
          onClick={event => this.props.onClick(studyData)}
        />
      );
    });
  };
}
