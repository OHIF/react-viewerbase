import createStacks from '../../lib/createStacks';
import getImageId from '../../lib/getImageId';

function getThumbnailsFromStudy(study) {
    var stacks = createStacks(study);

    var array = [];
    stacks.forEach(function(stack) {
        var instance = stack.instances[0];
        if (!instance) {
            return;
        }

        var imageId = getImageId(instance);
        var description = stack.seriesDescription;

        array.push({
            imageId: imageId,
            description: description
        });
    });

    return array;
}

import React, { Component } from 'react';
import ThumbnailEntry from './ThumbnailEntry';

export default class StudyBrowser extends Component {
    render() {
        var studies = this.props.studies;
        return (
            <div className="studyBrowser"
                 style={{height: '100%'}}>
                <div className="scrollableStudyThumbnails"
                     style={{height: '100%',
                             overflow: 'auto'}}>
                    {studies.map(study => {
                        var thumbnails = getThumbnailsFromStudy(study);
                        return thumbnails.map(thumb => {
                            return <ThumbnailEntry
                                       key={thumb.id}
                                       imageId={thumb.imageId}
                                       description={thumb.description}/>;
                        });
                    })}
                </div>
            </div>
        );
    }
}

StudyBrowser.propTypes = {
    studies: React.PropTypes.array.isRequired
};

StudyBrowser.defaultProps = {
    studies: []
};