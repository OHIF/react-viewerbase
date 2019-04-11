import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StudiesItem.styl';

export class StudiesItem extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    studyData: PropTypes.object.isRequired,
    active: PropTypes.bool
  };

  render() {
    const {
      studyDate,
      studyDescription,
      modalities,
      studyAvailable
    } = this.props.studyData;
    const activeClass = this.props.active ? ' active' : '';
    const hasDescriptionAndDate = studyDate && studyDescription;
    return (
      <div
        className={`studyBrowseItem${activeClass}`}
        onClick={this.props.onClick}
      >
        <div className="studyItemBox">
          <div className="studyModality">
            <div
              className="studyModalityText"
              style={this.getModalitiesStyle()}
            >
              {modalities}
            </div>
          </div>
          <div className="studyText">
            {hasDescriptionAndDate ? (
              <>
                <div className="studyDate">{studyDate}</div>
                <div className="studyDescription">{studyDescription}</div>
              </>
            ) : (
              <div className="studyAvailability">
                {studyAvailable ? <>N/A</> : <>Click to load</>}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  getModalitiesStyle = () => {
    return {};
  };
}
