import React, { Component } from 'react';

class StudyListRow extends Component {
  render() {
    return (
      <tr className="studylistStudy noselect {{#if this.selected}}active{{/if}}">
        <td className="patientName {{#unless patientName}}emptyValue{{/unless}}">
          {this.props.study.patientName}
        </td>
        <td className="patientId">{this.props.study.patientId}</td>
        <td className="accessionNumber">{this.props.study.accessionNumber}</td>
        <td className="studyDate">{this.props.study.studyDate}</td>
        <td className="modalities">{this.props.study.modalities}</td>
        <td className="studyDescription">
          {this.props.study.studyDescription}
        </td>
      </tr>
    );
  }
}

export default StudyListRow;
