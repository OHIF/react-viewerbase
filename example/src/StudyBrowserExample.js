import React, { Component } from 'react';
import { ThumbnailEntry, StudyBrowser } from 'react-viewerbase';

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
  constructor(props) {
    super(props);

    this.onThumbnailDoubleClick = this.onThumbnailDoubleClick.bind(this);
    this.onThumbnailClick = this.onThumbnailClick.bind(this);
    this.onThumbnailDrag = this.onThumbnailDrag.bind(this);
    this.resetDragEffects = this.resetDragEffects.bind(this);

    this.state = {
        studyBrowserDropResults: '',
    }
  }

  resetDragEffects() {
    const targetClass = 'study-drop-area';
    const hoverClass = 'hovered';

    // Remove any current hovered effects on viewports
    const hovered = document.querySelector(`.${targetClass}.${hoverClass}`);
    if (hovered) {
      hovered.classList.remove(hoverClass);
    }
    document.body.style.cursor = 'no-drop';
  }

  onThumbnailDrag(event) {
    const targetClass = 'study-drop-area';
    const hoverClass = 'hovered';

    const elemBelow = ThumbnailEntry.getDropElement(event);

    // If none exists, stop here
    if (!elemBelow) {
      this.resetDragEffects();
      return;
    }

    // Figure out what to do depending on what we're dragging over
    const elementIsInsideTarget = elemBelow.closest(`.${targetClass}`);

    // If what we are dragging over is not the target or one of it's children, stop here
    if (!elementIsInsideTarget) {
      this.resetDragEffects();
      return;
    }
    // If we are inside the target, add the hover class
    const target = elemBelow.closest(`.${targetClass}`);
    target.classList.add(hoverClass);
    // Update the cursor to something that indicates to the user that we can drop here
    document.body.style.cursor = 'copy';
  }
  onThumbnailClick() {
    console.warn('onThumbnailClick');
    console.warn(this);
  }
  onThumbnailDoubleClick() {
    console.warn('onThumbnailDoubleClick');
    console.warn(this);
  }
  onThumbnailDrop = (event, data) => {
    const targetClass = 'study-drop-area';
    const hoverClass = 'hovered';

    // Reset the cursor
    document.body.style.cursor = 'auto';

    const hovered = document.querySelector(`.${targetClass}.${hoverClass}`);
    if (hovered) {
      hovered.classList.remove(hoverClass);
    }

    const elemBelow = ThumbnailEntry.getDropElement(event);

    // If none exists, stop here
    if (!elemBelow) {
      return;
    }

    // Figure out what to do depending on what we're dragging over
    const elementIsInsideTarget = elemBelow.closest(`.${targetClass}`);
    if (elementIsInsideTarget) {
      this.setState({
        studyBrowserDropResults: JSON.stringify(data, null, 2)
      });
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <h3>Study Browser</h3>
          <p>
            A simple scrollable list of image sets. Users can drag/drop data
            from here into a panel in the layout.
          </p>
          <div className="study-drop-area">
            <h4>Drag / Drop something from the Study Browser here</h4>
            <span className="study-drop-results">
              {this.state.studyBrowserDropResults}
            </span>
          </div>
        </div>
        <div className="col-xs-12 col-lg-6" style={{ height: '512px' }}>
          <StudyBrowser
            studies={exampleStudies}
            onThumbnailClick={this.onThumbnailClick}
            onThumbnailDoubleClick={this.onThumbnailDoubleClick}
            onThumbnailDrag={this.onThumbnailDrag}
            onThumbnailDrop={this.onThumbnailDrop}
          />
        </div>
      </div>
    );
  }
}

export default StudyBrowserExample;
