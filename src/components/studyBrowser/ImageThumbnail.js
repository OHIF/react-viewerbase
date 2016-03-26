/*Template.imageThumbnail.helpers({
    percentComplete: function() {
        var percentComplete = Session.get('CornerstoneThumbnailLoadProgress' + this.thumbnailIndex);
        if (percentComplete && percentComplete !== 100) {
            return percentComplete + '%';
        }
    }
});*/

import React, { Component } from 'react';

export default class ThumbnailLoadingIndicator extends Component {
    render() {
        return (
            <div className="imageThumbnailLoadingIndicator thumbnailLoadingIndicator">
                <p>Loading {this.props.percentComplete}</p>
            </div>
        );
    }
}

ThumbnailLoadingIndicator.propTypes = {
    percentComplete: React.PropTypes.number
};

export default class ThumbnailErrorIndicator extends Component {
    render() {
        return (
            <div className="imageThumbnailErrorLoadingIndicator thumbnailLoadingIndicator">
                <p>Error</p>
            </div>
        );
    }
}

export default class ImageThumbnail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: false
        };
    }

    componentDidMount() {
        console.log('mounted!');
        var element = this.refs.element;
        cornerstone.enable(element);

        var self = this;
        cornerstone.loadAndCacheImage(this.props.imageId).then(function(image) {
            cornerstone.displayImage(element, image);

            self.setState({
                loading: false,
                error: false
            });
        }, function() {
            self.setState({
                loading: false,
                error: true
            });
        });

    }
    componentWillUnmount() {
        cornerstone.disable(this.refs.element);
    }

    render() {
        return (
            <div ref="element" className="imageThumbnail">
                { this.state.loading ? <ThumbnailLoadingIndicator percentComplete={this.state.percentComplete}/> : null }
                { this.state.error ? <ThumbnailErrorIndicator /> : null }
            </div>
        );
    }
}