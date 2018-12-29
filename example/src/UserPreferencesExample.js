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
            5: { description: undefined, window: undefined, level: undefined },
            6: { description: undefined, window: undefined, level: undefined },
            7: { description: undefined, window: undefined, level: undefined },
            8: { description: undefined, window: undefined, level: undefined },
            9: { description: undefined, window: undefined, level: undefined },
            10: { description: undefined, window: undefined, level: undefined }
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

        this.state = {
            modalOpened: false,
            windowLevel: JSON.parse(JSON.stringify(this.windowLevelDefault)),
            hotKeys: JSON.parse(JSON.stringify(this.hotKeysDefault)),
        };
    }

    openModal() {
        this.setState({ modalOpened: true });
    }

    hideModal() {
        this.setState({ modalOpened: false });
    }

    save() {
        alert('save button was clicked. closing modal');
        this.setState({ modalOpened: false });
    }

    resetDefaults() {

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h3>User preferences</h3>
                        <p>Used to set the user preferences.</p>
                        <p><b>Values from window/level form:</b><br />{JSON.stringify(this.state.windowLevel)}</p>
                        <p><b>Values from hotkey form:</b><br />{JSON.stringify(this.state.hotKeys)}</p>
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
                            onHideModal={this.hideModal.bind(this)}
                            onSave={this.save.bind(this)}
                            onResetDefaults={this.resetDefaults.bind(this)}
                            windowLevelData={this.state.windowLevel}
                            hotKeysData={this.state.hotKeys}
                        />
                    </div>
                </div>
            </div>)
    }

}