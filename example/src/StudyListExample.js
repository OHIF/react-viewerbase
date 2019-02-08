import React, { Component } from 'react';
import { StudyList } from 'react-viewerbase';
import moment from 'moment';

class StudyListExample extends Component {
    constructor(props) {
        super(props)

        this.defaultStudies = [{
            studyInstanceUID: '11111.111111.111111.11111',
            patientName: 'John Doe',
            patientId: '1',
            accessionNumber: '1234567',
            studyDate: '19930201',
            modalities: 'MR',
            studyDescription: 'BRAIN',
        },
        {
            studyInstanceUID: '2222.222222.22222.22222',
            patientName: 'José Silva',
            patientId: '2',
            accessionNumber: '7654321',
            studyDate:  moment().format('YYYYMMDD'),
            modalities: 'CT',
            studyDescription: 'PET CT STANDARD',
        },
        {
            studyInstanceUID: '3333.333333.33333.33333',
            patientName: 'Antônio Jefferson',
            patientId: '3',
            accessionNumber: '732311',
            studyDate:  moment().subtract(14, 'days').format('YYYYMMDD'),
            modalities: 'US',
            studyDescription: '0',
        }, {
            studyInstanceUID: '444444.44444.44444.4444',
            patientName: 'Antonio da Silva',
            patientId: '4',
            accessionNumber: '732311',
            studyDate: moment().subtract(1, 'months').format('YYYYMMDD'),
            modalities: 'US',
            studyDescription: '0',
        }, {
            studyInstanceUID: '55555.55555.55555.55555',
            patientName: 'Bezerra Souza',
            patientId: '5',
            accessionNumber: '5134543',
            studyDate: moment().subtract(6, 'days').format('YYYYMMDD'),
            modalities: 'US',
            studyDescription: '0',
        }, {
            studyInstanceUID: '66666.66666.66666.6666',
            patientName: 'Geraldo Roger',
            patientId: '6',
            accessionNumber: '5315135',
            studyDate: moment().subtract(7, 'days').format('YYYYMMDD'),
            modalities: 'US',
            studyDescription: 'US',
        }].sort(function (a, b) {
            if (a.patientName < b.patientName) { return -1; }
            if (a.patientName > b.patientName) { return 1; }
            return 0;
        });

        this.rowsPerPage = 5;
        this.defaultSort = { field: 'patientName', order: 'desc', };
        this.studyListDateFilterNumDays = 7;

        this.state = {
            searchData: {},
            studies: this.defaultStudies.slice(0, this.rowsPerPage).filter(study=>{
                const studyDate = moment(study['studyDate'], 'YYYYMMDD');
                return studyDate.isBetween(moment().subtract(this.studyListDateFilterNumDays, 'days'), moment(), 'days', '[]');
            }),
        }

        this.onSearch = this.onSearch.bind(this);
    }

    onImport(event) {
        alert('Import study mock ' + event);
    }

    onSelectItem(studyInstanceUID) {
        alert(studyInstanceUID + ' has selected! Now you can open your study.');
    }

    onSearch(searchData) {
        this.setState({searchData});

        const filter = (key, searchData, study) => {
            if (key === 'studyDateFrom' && searchData[key] && study['studyDate']) {
                const studyDate = moment(study['studyDate'], 'YYYYMMDD');
                return studyDate.isBetween(searchData['studyDateFrom'], searchData['studyDateTo'], 'days', '[]');
            } else if (searchData[key] && !study[key].includes(searchData[key])) {
                return false;
            } else {
                return true;
            }
        };

        const { field, order } = searchData.sortData;

        // just a example of local filtering
        let filteredStudies = this.defaultStudies.filter(function (study) {
            const all = ['patientName', 'patientId', 'accessionNumber', 'modalities', 'studyDescription', 'studyDateFrom',]
            .every(key => {
                return filter(key, searchData, study);
            });

            return all;
        }).sort(function (a, b) {
            if (order === 'desc') {
                if (a[field] < b[field]) { return -1; }
                if (a[field] > b[field]) { return 1; }
                return 0;
            } else {
                if (a[field] > b[field]) { return -1; }
                if (a[field] < b[field]) { return 1; }
                return 0;
            }
        });

        // User can notice the loading icon
        return new Promise((resolve) => {
            setTimeout(() => {
                const first = searchData.currentPage * searchData.rowsPerPage;
                let last = searchData.currentPage * searchData.rowsPerPage + searchData.rowsPerPage;
                last = last >= filteredStudies.length ? filteredStudies.length : last;
                this.setState({ studies: filteredStudies.slice(first, last) });
                resolve();
            }, 500);
        });
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className='col-xs-12'>
                        <h3>Study List</h3>
                    </div>
                    <div className="col-md-12">
                        <p>Used to search and list studies.</p>
                        <p>Search filters {JSON.stringify(this.state.searchData, null, 2)}</p>
                    </div>
                </div>
                <div className="row" style={
                    /* This style settings is just to wrap the component and set a dark background (like on OHIF) */
                    { backgroundColor: '#000', height: '600px' }
                }>
                    <div className="col-xs-12" style={{ padding: 0 }}>
                        <StudyList studies={this.state.studies}
                            studyCount={this.defaultStudies.length}
                            studyListFunctionsEnabled={true}
                            onImport={this.onImport}
                            onSelectItem={this.onSelectItem}
                            rowsPerPage={this.rowsPerPage}
                            defaultSort={this.defaultSort}
                            studyListDateFilterNumDays={this.studyListDateFilterNumDays}
                            onSearch={this.onSearch} />
                    </div>
                </div>
            </>
        );
    }
}

export default StudyListExample;
