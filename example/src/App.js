import React, { Component } from 'react';
import './initCornerstone';
import { LayoutButton, ToolbarSection, StudyBrowser } from 'react-viewerbase';

const exampleButtons = [
  {
    command: 'Pan',
    type: 'tool',
    text: 'Pan',
    svgUrl: '/icons.svg#icon-tools-pan',
    active: false
  },
  {
    command: 'Zoom',
    type: 'tool',
    text: 'Zoom',
    svgUrl: '/icons.svg#icon-tools-zoom',
    active: false
  },
  {
    command: 'Bidirectional',
    type: 'tool',
    text: 'Bidirectional',
    svgUrl: '/icons.svg#icon-tools-measure-target',
    active: true
  },
  {
    command: 'StackScroll',
    type: 'tool',
    text: 'Stack Scroll',
    svgUrl: '/icons.svg#icon-tools-stack-scroll',
    active: false
  },
  {
    command: 'reset',
    type: 'command',
    text: 'Reset',
    svgUrl: '/icons.svg#icon-tools-reset',
    active: false
  },
  {
    command: 'Wwwc',
    type: 'tool',
    text: 'Manual',
    svgUrl: '/icons.svg#icon-tools-levels',
    active: false
  },
];

const exampleStudies = [
  {
    thumbnails: [
      {
        imageSrc: 'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/Anti-PD-1_Lung.jpg',
        seriesDescription: 'Anti-PD-1_Lung',
        active: true,
        seriesNumber: 2,
        numImageFrames: 512,
        stackPercentComplete: 30
      }, {
        imageSrc: 'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/Anti-PD-1_MELANOMA.jpg',
        seriesDescription: 'Anti-PD-1_MELANOMA',
        seriesNumber: 2,
        instanceNumber: 1,
        numImageFrames: 256,
        stackPercentComplete: 70
      }
    ]
  }, {
    thumbnails: [
      {
        imageSrc: 'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-GBM.jpg',
        seriesDescription: 'CPTAC-GBM',
        active: true,
        seriesNumber: 2,
        numImageFrames: 512,
        stackPercentComplete: 100
      }, {
        imageSrc: 'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-CM.jpg',
        seriesDescription: 'CPTAC-CM',
        seriesNumber: 2,
        instanceNumber: 1,
        numImageFrames: 256
      }, {
        imageSrc: 'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-HNSCC.jpg',
        seriesDescription: 'CPTAC-HNSCC',
        seriesNumber: 2,
        instanceNumber: 1,
        numImageFrames: 256
      }, {
        imageSrc: 'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-LSCC.jpg',
        seriesDescription: 'CPTAC-LSCC',
        seriesNumber: 2,
        instanceNumber: 1,
        numImageFrames: 256
      }
    ]
  }
];

function onThumbnailDoubleClick() {
  console.warn('onThumbnailDoubleClick');
  console.warn(this);
}

function onThumbnailClick() {
  console.warn('onThumbnailClick');
  console.warn(this);
}

export default class App extends Component {
  render () {
    return (
      <div className="container">
      <div className="row">
        <h2>React Imaging Application Components</h2>
      </div>
        <div className="row">
          <div className='col-xs-12'>
            <h4>What is this?</h4>
            <p>A set of re-usable components for build medical imaging applications. We use these to build the <a href="http://ohif.org" target="_blank" rel="noopener noreferrer">OHIF Viewer</a>.
            </p>
          </div>
          <hr></hr>
        </div>
        <div className="row">
          <h2>Examples</h2>
          <div className="row">
            <div className='col-xs-12 col-lg-6'>
              <h3>Layout Button</h3>
              <p>Used to choose which layout to place the viewer into.</p>
            </div>
            <div className='col-xs-12 col-lg-6'>
              <LayoutButton/>
            </div>
          </div>
          <div className="row">
            <div className='col-xs-12 col-lg-6'>
              <h3>Toolbar Section</h3>
              <p>A basic row of buttons for a toolbar.</p>
            </div>
            <div className='col-xs-12 col-lg-6'>
              <ToolbarSection buttons={exampleButtons} setToolActive={() => console.log('setToolActive')}/>
            </div>
          </div>
          <div className="row">
            <div className='col-xs-12 col-lg-6'>
              <h3>Study Browser</h3>
              <p>A simple scrollable list of image sets. Users can drag/drop data from here into a panel in the layout.</p>
            </div>
            <div className='col-xs-12 col-lg-6' style={{height: "512px"}}>
              <StudyBrowser studies={exampleStudies} onThumbnailClick={onThumbnailClick} onThumbnailDoubleClick={onThumbnailDoubleClick}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
