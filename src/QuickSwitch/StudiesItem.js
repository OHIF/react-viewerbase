import React, { Component } from 'react';
import Proptypes from 'prop-types';

import './StudiesItem.styl';

export default class StudiesItem extends Component {
  static propTypes = {
    onClick: Proptypes.func.isRequired,
    studyData: Proptypes.object.isRequired
  };

  render() {
    const {
      studyDate,
      studyDescription,
      modalities,
      studyAvailable,
      active
    } = this.props.studyData;
    const activeClass = active ? ' active' : '';
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
