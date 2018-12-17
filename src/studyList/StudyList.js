import React, { Component } from 'react';
import StudyListRow from './StudyListRow';
import './StudyList.styl';

class StudyList extends Component {
  render() {
    return (
      <div className="StudyList">
        <div className="studyListToolbar clearfix">
          <div className="header pull-left">Study List</div>
          <div className="studyCount pull-right">
            {this.props.numberOfStudies}
          </div>
          <div className="pull-right">{/* TODO {>  studylistToolbar}*/}</div>
        </div>
        <div className="theadBackground" />
        <div id="studyListContainer">
          <table id="tblStudyList" className="studylistResult table noselect">
            <thead>
              <tr>
                <th className="patientName">
                  <div id="_patientName" className="sortingCell">
                    <span>Patient Name</span>
                    <i className="{{sortingColumnsIcons.patientName}}">
                      &nbsp;
                    </i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    id="patientName"
                  />
                </th>
                <th className="patientId">
                  <div id="_patientId" className="sortingCell">
                    <span>MRN</span>
                    <i className="{{sortingColumnsIcons.patientId}}">&nbsp;</i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    id="patientId"
                  />
                </th>
                <th className="accessionNumber">
                  <div id="_accessionNumber" className="sortingCell ">
                    <span>Accession #</span>
                    <i className="{{sortingColumnsIcons.accessionNumber}}">
                      &nbsp;
                    </i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    id="accessionNumber"
                  />
                </th>
                <th className="studyDate">
                  <div id="_studyDate" className="sortingCell">
                    <span>Study Date</span>
                    <i className="{{sortingColumnsIcons.studyDate}}">&nbsp;</i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    name="daterange"
                    id="studyDate"
                  />
                </th>
                <th className="modalities">
                  <div id="_modalities" className="sortingCell">
                    <span>Modality</span>
                    <i className="{{sortingColumnsIcons.modalities}}">&nbsp;</i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    id="modality"
                  />
                </th>
                <th className="studyDescription">
                  <div id="_studyDescription" className="sortingCell">
                    <span>Study Description</span>
                    <i className="{{sortingColumnsIcons.studyDescription}}">
                      &nbsp;
                    </i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    id="studyDescription"
                  />
                </th>
              </tr>
            </thead>
            <tbody id="studyListData">
              {this.props.studies.map(study => {
                return (
                  <StudyListRow key={study.studyInstanceUID} study={study} />
                );
              })}
            </tbody>
          </table>
          {/*{>paginationArea instance.paginationData}*/}
          {/*{#if session "showLoadingText"}*/}
          {/*{>loadingText}*/}
          {/*{else}*/}
          {/*{#if session "serverError"}*/}
          <div className="notFound">There was an error fetching studies</div>
          {/*{else}*/}
          {/*{#unless numberOfStudies}*/}
          <div className="notFound">No matching results</div>
          {/*{/unless}*/}
          {/*{/if}*/}
          {/*{/if}*/}
        </div>
      </div>
    );
  }
}

export default StudyList;
