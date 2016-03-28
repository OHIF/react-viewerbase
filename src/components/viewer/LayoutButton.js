import React, { Component } from 'react';
import LayoutChooser from './LayoutChooser';

export default class LayoutButton extends Component {
    render() {
        return (
            <div className="btn-group">
                <button id="layout" type="button"
                        className="btn btn-sm btn-default dropdown-toggle"
                        data-container="body" data-toggle="dropdown"
                        aria-expanded="false" data-placement="right" title="Layout" rel="tooltip">
                    <span className="fa fa-th-large"></span>
                </button>
                <LayoutChooser />
            </div>
        )
    }
}