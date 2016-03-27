/*Template.imageControls.events({
    'change #imageSlider': function(e) {
        // Using the slider in an inactive viewport
        // should cause that viewport to become active
        var slider = $(e.currentTarget);
        var newActiveElement = slider.parents().eq(2).siblings('.imageViewerViewport').get(0);
        setActiveViewport(newActiveElement);

        // Subtract 1 here since the slider goes from 1 to N images
        // But the stack indexing starts at 0
        var newImageIdIndex = parseInt(slider.val(), 10) - 1;
        switchToImageByIndex(newImageIdIndex);
    }
});*/

import React, { Component } from 'react';

export default class ImageControls extends Component {
    render() {
        return (
            <div className="imageControls">
                <div id="scrollbar">
                    <input id="imageSlider" type="range" min="1" val={this.props.value} max={this.props.max}/>
                </div>
            </div>
        );
    }
}

ImageControls.propTypes = {
    max: React.PropTypes.number,
    value: React.PropTypes.number
};

ImageControls.defaultProps = {
    value: 1
};