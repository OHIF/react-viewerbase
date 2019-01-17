import React, { Component } from 'react';
import Proptypes from 'prop-types';
import StudiesList from './StudiesList.js';
import ScrollableArea from '../ScrollableArea/ScrollableArea.js';
import SeriesList from './SeriesList.js';

import './QuickSwitch.styl';

export default class QuickSwitch extends Component {
  static propTypes = {
    class: Proptypes.string,
    studyListData: Proptypes.array.isRequired,
    seriesItems: Proptypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      studyListData: this.props.studyListData
    };
  }

  render() {
    return (
      <div className="quickswitch">
        <div className="series-quick-switch clearfix noselect">
          <div className="series-switch">
            <div className="title-label">Series</div>
            <div className="series-box">
              {this.getSeriesItems()}
              <ScrollableArea scrollStep={201} class="series-browser">
                <SeriesList
                  seriesItems={this.props.seriesItems}
                  onClick={this.onSeriesClick}
                />
              </ScrollableArea>
            </div>
          </div>
          <div className="study-switch">
            <div className="title-label">Study</div>
            <div className="study-box">
              <ScrollableArea scrollStep={91} class="study-browser">
                <StudiesList
                  studyListData={this.props.studyListData}
                  onClick={this.onStudyClick}
                />
              </ScrollableArea>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getSeriesItems = () => {
    return this.props.seriesItems.map((seriesItem, index) => {
      return <div key={index} className={`series-item ${seriesItem.class}`} />;
    });
  };

  onStudyClick = studyDataSelected => {
    const { studyListData } = this.state;

    studyListData.forEach(studyData => {
      studyData.studyActive = studyData.studyUID === studyDataSelected.studyUID;
    });

    this.setState({
      studyListData
    });
  };
}
