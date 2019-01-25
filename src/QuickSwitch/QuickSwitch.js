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
    seriesListData: Proptypes.array.isRequired,
    onSeriesSelected: Proptypes.func.isRequired,
    onStudySelected: Proptypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      seriesQuickSwitchClass: ''
    };
  }

  render() {
    return (
      <div className="quickswitch">
        <div
          className={`series-quick-switch clearfix noselect ${
            this.state.seriesQuickSwitchClass
          }`}
          onMouseLeave={this.hideSeriesSwitch}
        >
          <div
            className="series-switch"
            onMouseEnter={this.showSeriesSwitch}
            ref={element => {
              this.seriesSwitch = element;
            }}
          >
            <div className="title-label">Series</div>
            <div className="series-box">
              {this.getSeriesItems()}
              <ScrollableArea scrollStep={201} class="series-browser">
                <SeriesList
                  seriesItems={this.props.seriesListData}
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
    return this.props.seriesListData.map((seriesItem, index) => {
      return <div key={index} className={`series-item ${seriesItem.class}`} />;
    });
  };

  onStudyClick = studyDataSelected => {
    this.setState({
      seriesQuickSwitchClass: 'series-triggered'
    });
    this.props.onStudySelected(studyDataSelected);
  };

  onSeriesClick = seriesDataSelected => {
    this.props.onSeriesSelected(seriesDataSelected);
  };

  showSeriesSwitch = () => {
    this.setState({
      seriesQuickSwitchClass: 'series-triggered'
    });
  };

  hideSeriesSwitch = () => {
    this.setState({
      seriesQuickSwitchClass: ''
    });
  };
}
