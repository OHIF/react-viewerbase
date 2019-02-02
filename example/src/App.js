import React, { Component } from 'react';
import CineDialogExample from './CineDialogExample.js';
import LayoutExample from './LayoutExample.js';
import RoundedButtonGroupExample from './RoundedButtonGroupExample.js';
import SelectTreeExample from './SelectTreeExample.js';
import SimpleDialogExample from './SimpleDialogExample.js';
import StudyBrowserExample from './StudyBrowserExample.js';
import StudyListExample from './StudyListExample.js';
import ToolbarExample from './ToolbarExample.js';
import UserPreferencesExample from './UserPreferencesExample.js';
import TableListExample from './TableListExample.js';
import MeasurementTableExample from './MeasurementTableExample.js';
import QuickSwitchExample from './QuickSwitchExample.js';
import OverlayTriggerExample from './OverlayTriggerExample.js';
import ExpandableToolMenuExample from './ExpandableToolMenuExample.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCell: {
        row: 2,
        col: 2
      }
    };
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <h2>React Imaging Application Components</h2>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <h4>What is this?</h4>
              <p>
                A set of re-usable components for build medical imaging
                applications. We use these to build the{' '}
                <a
                  href="http://ohif.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OHIF Viewer
                </a>
                .
              </p>
            </div>
            <hr />
          </div>

          <div className="row">
            <h2>Examples</h2>
          </div>
          {/*<div className="row">
            <div className='col-xs-12 col-lg-12'>
              <LayoutManager rows={this.state.currentCell.row} columns={this.state.currentCell.col}>
                <ThumbnailEntry
                    {...exampleStudies[0].thumbnails[0]}
                  />
              </LayoutManager>
            </div>
          </div>*/}
          <ToolbarExample />
          <ExpandableToolMenuExample/>
          <LayoutExample />
          <StudyBrowserExample />
          <CineDialogExample />
          <RoundedButtonGroupExample />
          <UserPreferencesExample />
          <StudyListExample />
          <SimpleDialogExample />
          <TableListExample />
          <SelectTreeExample />
          <QuickSwitchExample />
          <MeasurementTableExample/>
          <OverlayTriggerExample/>
          {/*<div className="row">
            <div className='col-xs-12 col-lg-6'>
              <h3>Simple Toolbar</h3>
              <p>A basic row of buttons for a toolbar.</p>
            </div>
            <div className='col-xs-12 col-lg-6'>
              <Toolbar buttons={this.state.buttons}/>
            </div>
          </div>*/}
        </div>
    );
  }
}

export default App;

