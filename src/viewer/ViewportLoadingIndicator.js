/*Template.loadingIndicator.helpers({
    'percentComplete': function(e) {
        var percentComplete = Session.get('CornerstoneLoadProgress' + this.viewportIndex);
        if (percentComplete && percentComplete !== 100) {
            return percentComplete + '%';
        }
    }
});*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ViewportLoadingIndicator extends Component {
    render() {
        return (
            <div className="loadingIndicator"
                 style={{position: 'absolute',
                         top: 0,
                         left: 0,
                         right: 0,
                         bottom: 0,
                         margin: 'auto',
                         textAlign: 'center',
                         pointerEvents: 'none'}}>
                Loading {this.props.percentComplete}
            </div>
        );
    }
}

ViewportLoadingIndicator.propTypes = {
    percentComplete: PropTypes.number
};