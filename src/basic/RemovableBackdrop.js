import React, { Component } from 'react';

export default class RemovableBackdrop extends Component {
    render() {
        return (
            <div className="removableBackdrop noselect"
                 oncontextmenu='return false;'
                 unselectable='on'
                 onselectstart='return false;'>
            </div>
        );
    }
}
