import React, { Component } from 'react';
import { QuickSwitch } from 'react-viewerbase';

const studyListData = [
  {
    studyUID: 123,
    studyDescription: 'PET CT STANDARD',
    modalities: 'CT',
    studyDate: '18-nov-2018',
    studyActive: false
  },
  {
    studyUID: 124,
    studyDescription: 'PET CT STANDARD',
    modalities: 'CT',
    studyDate: '18-nov-2018',
    studyActive: false
  },
  {
    studyUID: 125,
    studyDescription: 'PET CT STANDARD',
    modalities: 'CT',
    studyDate: '18-nov-2018',
    studyActive: true
  }
];

export default class QuickSwitchExample extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <h3>Quick Switch</h3>
        </div>
        <div className='offset-xs-6 col-xs-6'>
          <QuickSwitch 
            studyListData={studyListData}
          />
        </div>
      </div>
    )
  }
}