import React, { Component } from 'react';
import { StudyList } from 'react-viewerbase';

class StudyListExample extends Component {
    constructor(props) {
        super(props)

        this.studies = [{
            studyInstanceUID: '11111.111111.111111.11111',
            patientName: 'John Doe',
            patientId: '1',
            accessionNumber: '1234567',
            studyDate: 'Dec 14, 2018',
            modalities: 'MR',
            studyDescription: 'BRAIN',
        },
        {
            studyInstanceUID: '2222.222222.22222.22222',
            patientName: 'José Silva',
            patientId: '2',
            accessionNumber: '7654321',
            studyDate: 'Dec 13, 2018',
            modalities: 'CT',
            studyDescription: 'PET CT STANDARD',
        }];
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Study List</h3>
                        <p>Used to control a playing CINE clip inside a viewport</p>
                        <p>State changed to {JSON.stringify(this.state, null, 2)}</p>
                    </div>
                </div>
                <div className="row" style={
                    /* This style settings is just to wrap the component and set a dark background (like on OHIF) */
                    { 'background-color': '#000', 'height': '500px' }
                }>
                    <div className="col-xs-12" style={{ padding: 0 }}>
                        <StudyList studies={this.studies} />
                    </div>
                </div>
            </div >
        );
    }
}

export default StudyListExample;
