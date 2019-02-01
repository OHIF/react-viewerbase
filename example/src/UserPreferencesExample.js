import React, { Component } from 'react';
import { UserPreferencesModal } from 'react-viewerbase';

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export default class UserPreferencesExample extends Component {

    constructor(props) {
        super(props)

        this.windowLevelDefault = {
            0: { description: 'Soft tissue', window: 400, level: 40 },
            1: { description: 'Lung', window: 1500, level: -600 },
            2: { description: 'Liver', window: 150, level: 90 },
            3: { description: 'Bone', window: 2500, level: 480 },
            4: { description: 'Brain', window: 80, level: 40 },
            5: { description: '', window: '', level: '' },
            6: { description: '', window: '', level: '' },
            7: { description: '', window: '', level: '' },
            8: { description: '', window: '', level: '' },
            9: { description: '', window: '', level: '' },
            10: { description: '', window: '', level: '' }
        };

        this.hotKeysDefault = {
            defaultTool: { label: 'Default Tool', command: 'ESC', column: 0 },
            zoom: { label: 'Zoom', command: 'Z', column: 0 },
            wwwc: { label: 'W/L', command: 'W', column: 0 },
            pan: { label: 'Pan', command: 'P', column: 0 },
            angle: { label: 'Angle measurement', command: 'A', column: 0 },
            stackScroll: { label: 'Scroll stack', command: 'S', column: 0 },
            magnify: { label: 'Magnify', command: 'M', column: 0 },
            length: { label: 'Length measurement', command: '', column: 0 },
            annotate: { label: 'Annotate', command: '', column: 0 },
            dragProbe: { label: 'Pixel probe', command: '', column: 0 },
            ellipticalRoi: { label: 'Elliptical ROI', command: '', column: 0 },
            rectangleRoi: { label: 'Rectangle ROI', command: '', column: 0 },

            // Viewport hotkeys
            flipH: { label: 'Flip Horizontally', command: 'H', column: 0 },
            flipV: { label: 'Flip Vertically', command: 'V', column: 0 },
            rotateR: { label: 'Rotate Right', command: 'R', column: 0 },
            rotateL: { label: 'Rotate Left', command: 'L', column: 0 },
            invert: { label: 'Invert', command: 'I', column: 0 },
            zoomIn: { label: 'Zoom In', command: '', column: 0 },
            zoomOut: { label: 'Zoom Out', command: '', column: 0 },
            zoomToFit: { label: 'Zoom to Fit', command: '', column: 0 },
            resetViewport: { label: 'Reset', command: '', column: 0 },
            clearTools: { label: 'Clear Tools', command: '', column: 0 },

            // 2nd column

            // Viewport navigation hotkeys
            scrollDown: { label: 'Scroll Down', command: 'DOWN', column: 1 },
            scrollUp: { label: 'Scroll Up', command: 'UP', column: 1 },
            scrollLastImage: { label: 'Scroll to Last Image', command: 'END', column: 1 },
            scrollFirstImage: { label: 'Scroll to First Image', command: 'HOME', column: 1 },
            previousDisplaySet: { label: 'Previous Series', command: 'PAGEUP', column: 1 },
            nextDisplaySet: { label: 'Next Series', command: 'PAGEDOWN', column: 1 },
            nextPanel: { label: 'Next Image Viewport', command: 'RIGHT', column: 1 },
            previousPanel: { label: 'Previous Image Viewport', command: 'LEFT', column: 1 },

            // Miscellaneous hotkeys
            toggleOverlayTags: { label: 'Toggle Image Info Overlay', command: 'O', column: 1 },
            toggleCinePlay: { label: 'Play/Pause Cine', command: 'SPACE', column: 1 },
            toggleCineDialog: { label: 'Show/Hide Cine Controls', command: '', column: 1 },
            toggleDownloadDialog: {
                label: 'Show/Hide Download Dialog',
                command: '',
                column: 1,
            },

            // Preset hotkeys
            WLPreset0: { label: 'W/L Preset 0  (Soft Tissue)', command: '1', column: 1 },
            WLPreset1: { label: 'W/L Preset 1 (Lung)', command: '2', column: 1 },
            WLPreset2: { label: 'W/L Preset 2 (Liver)', command: '3', column: 1 },
            WLPreset3: { label: 'W/L Preset 3 (Bone)', command: '4', column: 1 },
            WLPreset4: { label: 'W/L Preset 4 (Brain)', command: '5', column: 1 },
            WLPreset5: { label: 'W/L Preset 5', command: '6', column: 1 },
            WLPreset6: { label: 'W/L Preset 6', command: '7', column: 1 },
            WLPreset7: { label: 'W/L Preset 7', command: '8', column: 1 },
            WLPreset8: { label: 'W/L Preset 8', command: '9', column: 1 },
            WLPreset9: { label: 'W/L Preset 0', command: '0', column: 1 },
        };

        this.database = {
            windowLevelData: deepClone(this.windowLevelDefault),
            hotKeysData: deepClone(this.hotKeysDefault),
        };

        this.state = {
            modalOpened: false,
            windowLevelData: deepClone(this.database.windowLevelData),
            hotKeysData: deepClone(this.database.hotKeysData),
        };
    }

    openModal() {
        this.setState({ modalOpened: true, });

        // Persist the latest state version into database
        this.database.hotKeysData = deepClone(this.state.hotKeysData);
        this.database.windowLevelData = deepClone(this.state.windowLevelData);
    }

    onCancel() {
        // close the modal and put the last data saved.
        this.setState({
            modalOpened: false,
            hotKeysData: deepClone(this.database.hotKeysData),
            windowLevelData: deepClone(this.database.windowLevelData),
        });
    }

    save(componentState) {
        const { hotKeysData, windowLevelData } = componentState;
        this.setState({ modalOpened: false, hotKeysData, windowLevelData });
    }

    resetToDefaults() {
        // Reset to the system's defaults.
        this.setState({
            modalOpened: false,
            hotKeysData: deepClone(this.hotKeysDefault),
            windowLevelData: deepClone(this.windowLevelDefault),
        });
    }

    render() {
        return (
            <div className="row">
                <div className='col-xs-12'>
                    <h3>User preferences</h3>
                </div>
                <div className="col-xs-12 col-md-6">
                    <p>Used to set the user preferences.</p>
                    <p><b>Values from window/level form:</b><br /></p>
                    <pre style={{ maxHeight: '100px', overflowX: 'auto' }}>
                        {JSON.stringify(this.state.windowLevelData, null, 4)}
                    </pre>

                    <p><b>Values from hotkey form:</b><br /></p>
                    <pre style={{ maxHeight: '100px', overflowX: 'auto' }}>{JSON.stringify(this.state.hotKeysData, null, 2)}
                    </pre>
                </div>
                <div className="col-xs-12 col-md-6">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={this.openModal.bind(this)}>
                        Open user preferences
                    </button>
                    <UserPreferencesModal
                        isOpen={this.state.modalOpened}
                        onCancel={this.onCancel.bind(this)}
                        onSave={this.save.bind(this)}
                        onResetToDefaults={this.resetToDefaults.bind(this)}
                        windowLevelData={this.state.windowLevelData}
                        hotKeysData={this.state.hotKeysData}
                    />
                </div>
            </div>
        );
    }
}
