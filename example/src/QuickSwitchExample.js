import React, { Component } from 'react';
import { QuickSwitch } from 'react-viewerbase';

const exampleStudies = [
  {
    studyUID: '10001',
    studyDescription: 'Anti-PD-1',
    modalities: 'CT',
    studyDate: '18-nov-2018',
    active: false,
    thumbnails: [
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/Anti-PD-1_Lung.jpg',
        seriesDescription: 'Anti-PD-1_Lung',
        active: true,
        seriesNumber: "2",
        numImageFrames: 512,
        seriesUID: '10001-1',
        stackPercentComplete: 30
      },
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/Anti-PD-1_MELANOMA.jpg',
        seriesDescription: 'Anti-PD-1_MELANOMA',
        seriesNumber: "2",
        instanceNumber: "1",
        numImageFrames: 256,
        seriesUID: '10001-2',
        stackPercentComplete: 70
      }
    ]
  },
  {
    studyUID: '10002',
    studyDescription: 'CPTAC',
    modalities: 'CT',
    studyDate: '16-aug-2017',
    active: true,
    thumbnails: [
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-GBM.jpg',
        seriesDescription: 'CPTAC-GBM',
        active: true,
        seriesNumber: "2",
        numImageFrames: 512,
        seriesUID: '10002-1',
        stackPercentComplete: 100
      },
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-CM.jpg',
        seriesDescription: 'CPTAC-CM',
        seriesNumber: "2",
        instanceNumber: "1",
        seriesUID: '10002-2',
        numImageFrames: 256
      },
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-HNSCC.jpg',
        seriesDescription: 'CPTAC-HNSCC',
        seriesNumber: "2",
        instanceNumber: "1",
        seriesUID: '10002-3',
        numImageFrames: 256
      },
      {
        imageSrc:
          'https://raw.githubusercontent.com/crowds-cure/cancer/master/public/screenshots/CPTAC-LSCC.jpg',
        seriesDescription: 'CPTAC-LSCC',
        seriesNumber: "2",
        instanceNumber: "1",
        seriesUID: '10002-4',
        numImageFrames: 256
      }
    ]
  }
];

export default class QuickSwitchExample extends Component {
  constructor() {
    super();

    this.state = {
      studyListData: exampleStudies,
      showQuickSwitch: false
    }
  }

  render() {
    const activeStudy = this.state.studyListData.find( (study) => {
      return !!study.active;
    });

    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3>Quick Switch</h3>
        </div>
        <div className='col-xs-12'>
          <div>QuickSwitch display ON/OFF</div>
          <label className="switch">
            <input 
              type="checkbox"
              onChange={this.onChangeCheckBox}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="col-xs-12">
          {this.getSelectedData()}
        </div>
        <div className='offset-xs-6 col-xs-6'>
        { this.state.showQuickSwitch && (
          <QuickSwitch 
            studyListData={this.state.studyListData}
            seriesListData={activeStudy.thumbnails}
            onSeriesSelected={this.onSeriesSelected}
            onStudySelected={this.onStudySelected}
          />
        )}
        </div>
      </div>
    )
  }

  onChangeCheckBox = () => {
    this.setState({
      showQuickSwitch: !this.state.showQuickSwitch
    });
  }

  onSeriesSelected = seriesDataSelected => {
    const { studyListData } = this.state;
  
    studyListData.forEach(studyData => {
      studyData.thumbnails.forEach( seriesData => {
        seriesData.active = seriesData.seriesUID === seriesDataSelected.seriesUID;
      });
    });
  
    this.setState({
      studyListData
    });
  };
  
  onStudySelected = studyDataSelected => {
    const { studyListData } = this.state;
  
    studyListData.forEach(studyData => {
      studyData.active = studyData.studyUID === studyDataSelected.studyUID;
    });
  
    this.setState({
      studyListData
    });
  }

  getSelectedData = () => {
    const { studyListData } = this.state;
    let activeStudy;
    let activeSeries;


    activeStudy = studyListData.filter(studyData => {
      return studyData.active;  
    })[0];
    if (activeStudy && activeStudy.thumbnails) {
      activeSeries = activeStudy.thumbnails.filter( seriesData => {
        return seriesData.active;
      })[0];
    }

    return (
    <>
      <div><strong>Study Description:</strong>{activeStudy ? activeStudy.studyDescription : ''}</div>
      <div><strong>Series Description:</strong>{activeSeries ? activeSeries.seriesDescription : ''}</div>
    </>);
  }
}