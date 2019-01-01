import React, { Component } from 'react';
import { UserPreferencesModal } from 'react-viewerbase';

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
            defaultTool: { label: 'Default Tool', command: 'ESC' },
            zoom: { label: 'Zoom', command: 'Z' },
            wwwc: { label: 'W/L', command: 'W' },
            pan: { label: 'Pan', command: 'P' },
            angle: { label: 'Angle measurement', command: 'A' },
            stackScroll: { label: 'Scroll stack', command: 'S' },
            magnify: { label: 'Magnify', command: 'M' },
            length: { label: 'Length measurement', command: '' },
            annotate: { label: 'Annotate', command: '' },
            dragProbe: { label: 'Pixel probe', command: '' },
            ellipticalRoi: { label: 'Elliptical ROI', command: '' },
            rectangleRoi: { label: 'Rectangle ROI', command: '' },

            // Viewport hotkeys
            flipH: { label: 'Flip Horizontally', command: 'H' },
            flipV: { label: 'Flip Vertically', command: 'V' },
            rotateR: { label: 'Rotate Right', command: 'R' },
            rotateL: { label: 'Rotate Left', command: 'L' },
            invert: { label: 'Invert', command: 'I' },
            zoomIn: { label: 'Zoom In', command: '' },
            zoomOut: { label: 'Zoom Out', command: '' },
            zoomToFit: { label: 'Zoom to Fit', command: '' },
            resetViewport: { label: 'Reset', command: '' },
            clearTools: { label: 'Clear Tools', command: '' },

            // 2nd column

            // Viewport navigation hotkeys
            scrollDown: { label: 'Scroll Down', command: 'DOWN' },
            scrollUp: { label: 'Scroll Up', command: 'UP' },
            scrollLastImage: { label: 'Scroll to Last Image', command: 'END' },
            scrollFirstImage: { label: 'Scroll to First Image', command: 'HOME' },
            previousDisplaySet: { label: 'Previous Series', command: 'PAGEUP' },
            nextDisplaySet: { label: 'Next Series', command: 'PAGEDOWN' },
            nextPanel: { label: 'Next Image Viewport', command: 'RIGHT' },
            previousPanel: { label: 'Previous Image Viewport', command: 'LEFT' },

            // Miscellaneous hotkeys
            toggleOverlayTags: { label: 'Toggle Image Info Overlay', command: 'O' },
            toggleCinePlay: { label: 'Play/Pause Cine', command: 'SPACE' },
            toggleCineDialog: { label: 'Show/Hide Cine Controls', command: '' },
            toggleDownloadDialog: {
                label: 'Show/Hide Download Dialog',
                command: ''
            },

            // Preset hotkeys
            WLPreset0: { label: 'W/L Preset 0  (Soft Tissue)', command: '1' },
            WLPreset1: { label: 'W/L Preset 1 (Lung)', command: '2' },
            WLPreset2: { label: 'W/L Preset 2 (Liver)', command: '3' },
            WLPreset3: { label: 'W/L Preset 3 (Bone)', command: '4' },
            WLPreset4: { label: 'W/L Preset 4 (Brain)', command: '5' },
            WLPreset5: { label: 'W/L Preset 5', command: '6' },
            WLPreset6: { label: 'W/L Preset 6', command: '7' },
            WLPreset7: { label: 'W/L Preset 7', command: '8' },
            WLPreset8: { label: 'W/L Preset 8', command: '9' },
            WLPreset9: { label: 'W/L Preset 0', command: '0' },
        };

        this.database = {
            windowLevelData: { ...this.windowLevelDefault }, // cloning it
            hotKeysData: { ...this.hotKeysDefault }, // cloning it
        };

        this.state = {
            modalOpened: false,
            windowLevelData: { ...this.database.windowLevelData }, // cloning it
            hotKeysData: { ...this.database.hotKeysData }, // cloning it
        };
    }

    openModal() {
        this.setState({ modalOpened: true, });

        // Persist the latest state version into database
        this.database.hotKeysData = { ...this.state.hotKeysData };
        this.database.windowLevelData = { ...this.state.windowLevelData };
    }

    onCancel() {
        // close the modal and put the last data saved.
        this.setState({
            modalOpened: false,
            hotKeysData: { ...this.database.hotKeysData }, // cloning obj
            windowLevelData: { ...this.database.windowLevelData }, // cloning obj
        });
    }

    save() {
        // the windowLevelData and hotKeysData states have been changed already
        // now we just need to close the modal
        this.setState({ modalOpened: false });
    }

    resetToDefaults() {
        // Reset to the system's defaults.
        this.setState({
            modalOpened: true,
            hotKeysData: { ...this.hotKeysDefault }, // cloning obj
            windowLevelData: { ...this.windowLevelDefault }, // cloning obj
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6" style={{ maxHeight: '200px', overflowX: 'auto' }}>
                        <h3>User preferences</h3>
                        <p>Used to set the user preferences.</p>
                        <p><b>Values from window/level form:</b><br />
                            <pre>
                                {JSON.stringify(this.state.windowLevelData, null, 4)}
                            </pre>
                        </p>
                        <p><b>Values from hotkey form:</b><br />
                            <pre>{
                                JSON.stringify(this.state.hotKeysData, null, 2)}
                            </pre>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <button
                            class="btn btn-primary"
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
            </div>)
    }

}