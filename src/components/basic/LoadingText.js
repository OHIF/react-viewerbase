import React, { Component } from 'react';

export default class LoadingText extends Component {
    render() {
        return (
            <div className="loadingTextDiv">
                <h5>Loading... <i className="fa fa-spinner fa-pulse"></i></h5>
            </div>
        );
    }
}
