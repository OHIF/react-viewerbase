import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThumbnailEntry from './ThumbnailEntry';
import './StudyBrowser.styl';

class StudyBrowser extends Component {
    static defaultProps = {
        studies: [],
        supportsDragAndDrop: true
    }

    static propTypes = {
        studies: PropTypes.array.isRequired,
        supportsDragAndDrop: PropTypes.bool.isRequired,
        onThumbnailClick: PropTypes.func,
        onThumbnailDoubleClick: PropTypes.func
    }

    render() {
        var studies = this.props.studies;

        const thumbnails = studies.map(study => {
            return study.thumbnails.map((thumb, index) => (
                <ThumbnailEntry
                    key={index}
                    {...thumb}
                    supportsDragAndDrop={this.props.supportsDragAndDrop}
                    onClick={this.props.onThumbnailClick}
                    onDoubleClick={this.props.onThumbnailDoubleClick}/>
            ));
        });

        return (
            <div className="StudyBrowser">
                <div className="scrollable-study-thumbnails">
                    {thumbnails}
                </div>
            </div>
        );
    }
};

export default StudyBrowser;