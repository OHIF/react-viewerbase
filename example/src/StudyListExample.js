import React, { Component } from 'react';
import { StudyList } from 'react-viewerbase';

class StudyListExample extends Component {
    constructor(props) {
        super(props)

        this.studies = [{
            patientName: 'John Doe',
            patientId: '1',
            accessionNumber: '1234567',
            studyDate: 'Dec 14, 2018',
            modalities: 'MR',
            studyDescription: 'BRAIN',
        },
        {
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
            <div className="row">
                <div className="col-xs-12 col-lg-6">
                    <h3>CINE Dialog</h3>
                    <p>Used to control a playing CINE clip inside a viewport</p>
                    <p>State changed to {JSON.stringify(this.state, null, 2)}</p>
                </div>
                <div className="col-xs-12 col-lg-6" style={{ padding: '1rem' }}>
                    <StudyList studies={this.studies} />
                </div>
            </div>
        );
    }
}

export default StudyListExample;
