import React, { Component } from 'react';
import { StudyBrowser, ViewerbaseDragDropContext, ExampleDropTarget } from 'react-viewerbase';

const exampleStudies = [
  {
    thumbnails: [
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/Anti-PD-1_Lung.jpg',
        seriesDescription: 'Anti-PD-1_Lung',
        active: true,
        seriesNumber: 2,
        numImageFrames: 512,
        stackPercentComplete: 30
      },
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/Anti-PD-1_MELANOMA.jpg',
        seriesDescription: 'Anti-PD-1_MELANOMA',
        seriesNumber: 2,
        instanceNumber: 1,
        numImageFrames: 256,
        stackPercentComplete: 70
      }
    ]
  },
  {
    thumbnails: [
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-GBM.jpg',
        seriesDescription: 'CPTAC-GBM',
        active: true,
        seriesNumber: 2,
        numImageFrames: 512,
        stackPercentComplete: 100
      },
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-CM.jpg',
        seriesDescription: 'CPTAC-CM',
        seriesNumber: 2,
        instanceNumber: 1,
        numImageFrames: 256
      },
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-HNSCC.jpg',
        seriesDescription: 'CPTAC-HNSCC',
        seriesNumber: 2,
        instanceNumber: 1,
        numImageFrames: 256
      },
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-LSCC.jpg',
        seriesDescription: 'CPTAC-LSCC',
        seriesNumber: 2,
        instanceNumber: 1,
        numImageFrames: 256
      }
    ]
  }
];

class StudyBrowserExample extends Component {
  onThumbnailClick = () => {
    console.warn('onThumbnailClick');
    console.warn(this);
  }
  onThumbnailDoubleClick = () => {
    console.warn('onThumbnailDoubleClick');
    console.warn(this);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <h3>Study Browser</h3>
          <p>
            A simple scrollable list of image sets. Users can drag/drop data
            from here into a panel in the layout.
          </p>
          <ExampleDropTarget/>
        </div>
        <div className="col-xs-12 col-lg-6" style={{ height: '512px' }}>
          <StudyBrowser
            studies={exampleStudies}
            onThumbnailClick={this.onThumbnailClick}
            onThumbnailDoubleClick={this.onThumbnailDoubleClick}
          />
        </div>
      </div>
    );
  }
}

export default ViewerbaseDragDropContext(StudyBrowserExample);
