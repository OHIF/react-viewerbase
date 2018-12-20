import React, { Component } from 'react';
import { StudyList } from 'react-viewerbase';

class StudyListExample extends Component {
    constructor(props) {
        super(props)

        this.defaultStudies = [{
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
        },
        {
            studyInstanceUID: '3333.333333.33333.33333',
            patientName: 'Antônio Jefferson',
            patientId: '3',
            accessionNumber: '732311',
            studyDate: 'Dec 12, 2018',
            modalities: 'US',
            studyDescription: '0',
        },{
            studyInstanceUID: '444444.44444.44444.4444',
            patientName: 'Antonio da Silva',
            patientId: '4',
            accessionNumber: '732311',
            studyDate: 'Dec 12, 2018',
            modalities: 'US',
            studyDescription: '0',
        },{
            studyInstanceUID: '55555.55555.55555.55555',
            patientName: 'Bezerra Souza',
            patientId: '5',
            accessionNumber: '5134543',
            studyDate: 'Dec 22, 2018',
            modalities: 'US',
            studyDescription: '0',
        },{
            studyInstanceUID: '66666.66666.66666.6666',
            patientName: 'Geraldo Roger',
            patientId: '6',
            accessionNumber: '5315135',
            studyDate: 'Dec 12, 2016',
            modalities: 'US',
            studyDescription: 'US',
        }];

        this.state = {
            studies: this.defaultStudies,
        }

        this.onSearch = this.onSearch.bind(this);

        this.recordsPerPage = 10;
    }

    onImport(event) {
        alert('Import study mock ' + event);
    }

    onSearch(searchData) {
        alert('search data: ' + JSON.stringify(searchData) + ' - Now you can request your PACS');

        const filter = (key, searchData, study) => {
            if (searchData[key] && !study[key].includes(searchData[key])) {
                return false;
            } else {
                return true;
            }
        };

        // just a sample of local filtering
        const filteredStudies = this.defaultStudies.filter(function (study) {
            const all = ['patientName', 'patientId', 'accessionNumber', 'modalities', 'studyDescription'].every(key => {
                return filter(key, searchData, study);
            });

            return all;
        });

        this.setState({ studies: filteredStudies });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Study List</h3>
                        <p>Used to list the studies retrieved from PACS</p>
                        <p>Search filters {JSON.stringify(this.state, null, 2)}</p>
                    </div>
                </div>
                <div className="row" style={
                    /* This style settings is just to wrap the component and set a dark background (like on OHIF) */
                    { backgroundColor: '#000', height: '500px' }
                }>
                    <div className="col-xs-12" style={{ padding: 0 }}>
                        <StudyList studies={this.state.studies}
                            studyListFunctionsEnabled={true}
                            onImport={this.onImport}
                            onSearch={this.onSearch} />
                    </div>
                </div>
            </div >
        );
    }
}

export default StudyListExample;
