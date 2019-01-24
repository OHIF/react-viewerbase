import React, { Component } from 'react';
import Proptypes from 'prop-types';
import ThumbnailEntry from '../studyBrowser/ThumbnailEntry.js';

import './SeriesList.styl';

export default class SeriesList extends Component {
  static propTypes = {
    seriesItems: Proptypes.array.isRequired
  };

  render() {
    return (
      <>
        <div className="study-browser-series clearfix thumbnails-wrapper">
          <div className="study-series-container">{this.getSeriesItems()}</div>
        </div>
      </>
    );
  }

  getSeriesItems = () => {
    return this.props.seriesItems.map((seriesData, index) => {
      return <ThumbnailEntry key={index} {...seriesData} />;
    });
  };
}
