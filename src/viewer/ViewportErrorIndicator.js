import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ViewportErrorIndicator extends Component {
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
                <p>Error</p>
                <p className='description'>An error has occurred.</p>
                <p className='details'>{this.props.details}</p>
            </div>
        );
    }
}

ViewportErrorIndicator.propTypes = {
    details: PropTypes.string
};
