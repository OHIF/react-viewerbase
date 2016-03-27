import React, { Component } from 'react';

export default class SimpleToolbarButton extends Component {
    render() {
        return (
            <button id={this.props.id} type="button"
                    className="{this.props.classes} btn btn-sm btn-default"
                    data-container="body" data-toggle="tooltip"
                    data-placement="bottom" title={this.props.title}>
                <span className={this.props.iconClasses}></span>
            </button>
        );
    }
}