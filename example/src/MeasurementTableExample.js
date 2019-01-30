import React, { Component } from 'react';
import { MeasurementTable } from 'react-viewerbase';

export default class MeasurementTableExample extends Component {
  constructor() {
    super();

    this.state = {
      overwallWarnings: {
        warningList: [
          'All measurements should have a location',
          'Nodal lesions must be >= 15mm short axis AND >= double the acquisition slice thickness by CT and MR'
        ]
      },
      timepoints:[
        {
          label: 'Follow-up 2',
          date: '20-Dec-18'
        },
        {
          label: 'Follow-up 1',
          date: '15-Jun-18'
        },
        {
          label: 'Baseline',
          date: '10-Apr-18'
        }
      ],
      measurementCollection: [{
          maxMeasurements: 5,
          groupName: 'Targets',
          measurements: [{
              label: 'Chest Wall Posterior',
              hasWarnings: true,
              warningTitle: 'Criteria nonconformities',
              isSplitLesion: false,
              warningList: [
                'All measurements should have a location',
                'Nodal lesions must be >= 15mm short axis AND >= double the acquisition slice thickness by CT and MR'
              ],
              data: [{
                  displayText: '25.7 x 12.9'
                },{
                  displayText: '24.7 x 11.5'
                },
                {}
              ]
            },{
              label: 'Bone Extremity',
              data: [{
                  displayText: '24.7 x 11.1'
                },{
                  displayText: '21.2 x 10.9'
                },
                {}
              ]
            }
          ]
        },{
          maxMeasurements: 3,
          groupName: 'NonTargets',
          measurements: [{
              label: 'Chest Wall Single Site',
              data: [{
                  displayText: 'MD'
                },{
                  displayText: 'NM'
                },
                {}
              ]
            },{
              label: 'Extremity Multiple Sites',
              data: [{
                  displayText: 'CR'
                },
                {},
                {}
              ]
            },
            {
              label: 'Extremity Site',
              data: [{
                  displayText: 'CR'
                },
                {},
                {
                  displayText: 'NM'
                }
              ]
            }
          ]
        }
      ]
    }
  }
  render() {
    return (
      <div className='row'>
        <div className='col-xs-12 col-sm-6'>
          <h3>Measurement Table</h3>
          <p>Timepoints JSON data</p>
          <pre style={{ maxHeight: '225px', overflowX: 'auto' }}>
            {JSON.stringify(this.state.timepoints, null, 4)}
          </pre>
          <p>Measurements JSON data</p>
          <pre style={{ maxHeight: '225px', overflowX: 'auto' }}>
            {JSON.stringify(this.state.measurementCollection, null, 4)}
          </pre>
        </div>
        <div className='col-xs-12 col-sm-6' style={{ height: '400px', marginTop: '65px' }}>
          <MeasurementTable
            timepoints={this.state.timepoints}
            measurementCollection={this.state.measurementCollection}
            overwallWarnings={this.state.overwallWarnings}
          >
          </MeasurementTable>
        </div>
      </div>
    );
  }
}