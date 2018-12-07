/*Template.imageThumbnail.helpers({
    percentComplete: function() {
        var percentComplete = Session.get('CornerstoneThumbnailLoadProgress' + this.thumbnailIndex);
        if (percentComplete && percentComplete !== 100) {
            return percentComplete + '%';
        }
    }
});*/

import React, { Component } from 'react';
import ViewportLoadingIndicator from '../viewer/ViewportLoadingIndicator';
import ViewportErrorIndicator from '../viewer/ViewportErrorIndicator';

export default class ImageThumbnail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            error: false
        };
    }

    componentDidMount() {
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
        var loadingOrError;
        if (this.state.error) {
            loadingOrError = <ViewportErrorIndicator />;
        } else if (this.state.loading) {
            loadingOrError = <ViewportLoadingIndicator percentComplete={this.state.percentComplete}/>;
        }

        return (
            <div ref="element" className="imageThumbnail">
                {loadingOrError}
            </div>
        );
    }
}