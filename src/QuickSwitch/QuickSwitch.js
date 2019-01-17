import React, { Component } from 'react';
import Proptypes from 'prop-types';
import BrowserList from './BrowserList.js';
import ScrollableArea from '../ScrollableArea/ScrollableArea.js';

import './QuickSwitch.styl';

export default class QuickSwitch extends Component {
  static propTypes = {
    class: Proptypes.string,
    studyListData: Proptypes.array.isRequired
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
              <ScrollableArea scrollStep={201} class="series-browser">
                {/* <div class="clearfix thumbnails-wrapper">
                      {{>studyBrowserSeries (clone this studyMetadata=instance.currentStudy)}}
                    </div> */}
              </ScrollableArea>
            </div>
          </div>
          <div className="study-switch">
            <div className="title-label">Study</div>
            <div className="study-box">
              <ScrollableArea
                scrollStep={91}
                class="study-browser flex-grow fit"
              >
                <BrowserList
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
