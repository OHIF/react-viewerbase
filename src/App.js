import React, { Component } from 'react';

import LoadingText from './components/basic/loadingText';
import RemovableBackdrop from './components/basic/RemovableBackdrop';

import StudyBrowser from './components/studyBrowser/StudyBrowser';
import GridLayout from './components/viewer/GridLayout';
import Toolbar from './components/viewer/Toolbar';

var exampleStudies = [
    {
        studyInstanceUid: 'testStudy1',
        seriesList: [
            {
                seriesInstanceUid: 'testSeries1',
                seriesDescription: 'Study 1 Series 1 Description',
                instances: [
                    {
                        rows: 256,
                        columns: 256,
                        imageId: 'example://1'
                    }
                ]
            },
            {
                seriesInstanceUid: 'testSeries2',
                seriesDescription: 'Study 1 Series 2 Description',
                instances: [
                    {
                        rows: 256,
                        columns: 256,
                        imageId: 'example://2'
                    }
                ]
            }
        ]
    }, {
        studyInstanceUid: 'testStudy2',
        seriesList: [
            {
                seriesInstanceUid: 'testSeries3',
                seriesDescription: 'Study 2 Series 1 Description',
                instances: [
                    {
                        rows: 256,
                        columns: 256,
                        imageId: 'example://3'
                    }
                ]
            }
        ]
    }
];

var exampleViewportData = [{
    studyInstanceUid: 'testStudy1',
    seriesInstanceUid: 'testSeries1'
}, {
    studyInstanceUid: 'testStudy1',
    seriesInstanceUid: 'testSeries2'
}, {
    studyInstanceUid: 'testStudy2',
    seriesInstanceUid: 'testSeries3'
}, {
    studyInstanceUid: 'testStudy1',
    seriesInstanceUid: 'testSeries1'
}];

export default class App extends Component {
    render() {
        return (
            <div style={{width: "100%", height: "100%"}}>
                <div style={{width: "100%", height: "100%"}} className="row full-width">
                    <div className="col-xs-2"
                         style={{height: "100%"}}>
                        <StudyBrowser studies={exampleStudies}/>
                    </div>

                    <div className="col-xs-10"
                         style={{height: "100%"}}>
                        <div style={{width: "100%", height: "10%"}}>
                            <Toolbar />
                        </div>
                        <div style={{width: "100%", height: "90%"}}>
                            <GridLayout studies={exampleStudies}
                                        rows={1}
                                        columns={2}
                                        viewportData={exampleViewportData}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
