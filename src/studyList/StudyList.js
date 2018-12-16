import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudyListRow from './StudyListRow';
// import './CineDialog.styl';

class StudyList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="StudyList">
        <div class="studyListToolbar clearfix">
          <div class="header pull-left">Study List</div>
          <div class="studyCount pull-right">{this.props.numberOfStudies}</div>
          <div class="pull-right">{/* TODO {>  studylistToolbar}*/}</div>
        </div>
        <div class="theadBackground" />
        <div id="studyListContainer">
          <table id="tblStudyList" class="studylistResult table noselect">
            <thead>
              <tr>
                <th class="patientName">
                  <div id="_patientName" class="sortingCell">
                    <span>Patient Name</span>
                    <i class="{{sortingColumnsIcons.patientName}}">&nbsp;</i>
                  </div>
                  <input
                    type="text"
                    class="form-control studylist-search"
                    id="patientName"
                  />
                </th>
                <th class="patientId">
                  <div id="_patientId" class="sortingCell">
                    <span>MRN</span>
                    <i class="{{sortingColumnsIcons.patientId}}">&nbsp;</i>
                  </div>
                  <input
                    type="text"
                    class="form-control studylist-search"
                    id="patientId"
                  />
                </th>
                <th class="accessionNumber">
                  <div id="_accessionNumber" class="sortingCell ">
                    <span>Accession #</span>
                    <i class="{{sortingColumnsIcons.accessionNumber}}">
                      &nbsp;
                    </i>
                  </div>
                  <input
                    type="text"
                    class="form-control studylist-search"
                    id="accessionNumber"
                  />
                </th>
                <th class="studyDate">
                  <div id="_studyDate" class="sortingCell">
                    <span>Study Date</span>
                    <i class="{{sortingColumnsIcons.studyDate}}">&nbsp;</i>
                  </div>
                  <input
                    type="text"
                    class="form-control studylist-search"
                    name="daterange"
                    id="studyDate"
                  />
                </th>
                <th class="modalities">
                  <div id="_modalities" class="sortingCell">
                    <span>Modality</span>
                    <i class="{{sortingColumnsIcons.modalities}}">&nbsp;</i>
                  </div>
                  <input
                    type="text"
                    class="form-control studylist-search"
                    id="modality"
                  />
                </th>
                <th class="studyDescription">
                  <div id="_studyDescription" class="sortingCell">
                    <span>Study Description</span>
                    <i class="{{sortingColumnsIcons.studyDescription}}">
                      &nbsp;
                    </i>
                  </div>
                  <input
                    type="text"
                    class="form-control studylist-search"
                    id="studyDescription"
                  />
                </th>
              </tr>
            </thead>
            <tbody id="studyListData">
              {this.props.studies.map(study => {
                return <StudyListRow study={study} />;
              })}
            </tbody>
          </table>
          {/*{>paginationArea instance.paginationData}*/}
          {/*{#if session "showLoadingText"}*/}
          {/*{>loadingText}*/}
          {/*{else}*/}
          {/*{#if session "serverError"}*/}
          <div class="notFound">There was an error fetching studies</div>
          {/*{else}*/}
          {/*{#unless numberOfStudies}*/}
          <div class="notFound">No matching results</div>
          {/*{/unless}*/}
          {/*{/if}*/}
          {/*{/if}*/}
        </div>
      </div>
    );
  }
}

export default StudyList;
