import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './CineDialog.styl';

class StudyListRow extends Component {
  render() {
    return (
      <div className="studylistStudy">
        <tr class="studylistStudy noselect {{#if this.selected}}active{{/if}}">
          <td class="patientName {{#unless patientName}}emptyValue{{/unless}}">
            {this.props.study.patientName}
          </td>
          <td class="patientId">{this.props.study.patientId}</td>
          <td class="accessionNumber">{this.props.study.accessionNumber}</td>
          <td class="studyDate">{this.props.study.studyDate}</td>
          <td class="modalities">{this.props.study.modalities}</td>
          <td class="studyDescription">{this.props.study.studyDescription}</td>
        </tr>
      </div>
    );
  }
}

export default StudyListRow;
