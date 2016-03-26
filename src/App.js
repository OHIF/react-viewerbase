import React, { Component } from 'react';

import LoadingText from './components/basic/loadingText';
import RemovableBackdrop from './components/basic/RemovableBackdrop';

import StudyBrowser from './components/studyBrowser/StudyBrowser';

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

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>OHIF Viewerbase Package</h1>

                <h2>Components</h2>

                <h3>Basic</h3>
                <LoadingText />
                <RemovableBackdrop />

                <h3>Study Browser</h3>
                <StudyBrowser studies={exampleStudies}/>
            </div>
        );
    }
}
