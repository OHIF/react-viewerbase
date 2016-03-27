import React, { Component } from 'react';

export default class ViewportErrorIndicator extends Component {
    render() {
        return (
            <div className="loadingIndicator">
                <p>Error</p>
                <p className='description'>An error has occurred.</p>
                <p className='details'>{this.props.details}</p>
            </div>
        );
    }
}

ViewportErrorIndicator.propTypes = {
    details: React.PropTypes.string
};
