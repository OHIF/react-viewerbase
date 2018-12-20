import React, { Component } from 'react';

import StudyListRow from './StudyListRow';
import './StudyList.styl';
import StudylistToolbar from './StudyListToolbar';
import LoadingText from '../basic/LoadingText';
import PaginationArea from '../basic/paginationArea/PaginationArea';

class StudyList extends Component {
  constructor(props) {
    super(props);

    const sortData = {};
    const sortClasses = {
      patientName: 'fa fa-fw fa-sort',
      patientId: 'fa fa-fw fa-sort',
      accessionNumber: 'fa fa-fw fa-sort',
      studyDate: 'fa fa-fw fa-sort',
      modality: 'fa fa-fw fa-sort',
      studyDescription: 'fa fa-fw fa-sort'
    };

    if (props.defaultSort) {
      sortData.field = props.defaultSort.field;
      sortData.order = props.defaultSort.order;
      sortClasses[props.defaultSort.field] =
        props.defaultSort.order === 'desc'
          ? 'fa fa-fw fa-sort-desc'
          : 'fa fa-fw fa-sort-asc';
    }

    this.state = {
      loading: false,
      sortClasses,
      searchData: {
        sortData,
        currentPage: this.props.currentPage || 0,
        pageSize: this.props.pageSize || 10
      }
    };

    this.getChangeHandler = this.getChangeHandler.bind(this);
    this.onInputKeydown = this.onInputKeydown.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.onPageSizeChange = this.onPageSizeChange.bind(this);
    this.onSortClick = this.onSortClick.bind(this);
  }

  getChangeHandler(key) {
    return event => {
      this.setSearchData(key, event.target.value);
    };
  }

  setSearchData(key, value, callback) {
    const searchData = this.state.searchData;
    searchData[key] = value;
    this.setState({ searchData }, callback);
  }

  async onInputKeydown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.search();
    }
  }

  async search() {
    try {
      this.setState({ loading: true });
      await this.props.onSearch(this.state.searchData);
      this.error = false;
    } catch (e) {
      this.error = true;
    } finally {
      this.setState({ loading: false });
    }
  }

  renderNoMachingResults() {
    if (!this.props.studies.length && !this.error) {
      return <div className="notFound">No matching results</div>;
    }
  }

  renderHasError() {
    if (this.error) {
      return (
        <div className="notFound">There was an error fetching studies</div>
      );
    }
  }

  renderIsLoading() {
    if (this.state.loading) {
      return (
        <div className="loading">
          <LoadingText />
        </div>
      );
    }
  }

  onPageChange(currentPage) {
    this.setSearchData('currentPage', currentPage, this.search);
  }

  onPageSizeChange(pageSize) {
    this.setSearchData('pageSize', pageSize, this.search);
  }

  onSortClick(key) {
    return () => {
      const sortClasses = this.state.sortClasses;
      let order;

      if (sortClasses[key].includes('sort-asc')) {
        sortClasses[key] = 'fa fa-fw fa-sort-desc';
        order = 'desc';
      } else {
        sortClasses[key] = 'fa fa-fw fa-sort-asc';
        order = 'asc';
      }

      Object.keys(sortClasses).forEach(sortClassKey => {
        if (sortClassKey !== key) {
          sortClasses[sortClassKey] = 'fa fa-fw fa-sort';
        }
      });

      this.setState({ sortClasses }, () => {
        this.setSearchData('sortData', { field: key, order }, this.search);
      });
    };
  }

  render() {
    return (
      <div className="StudyList">
        <div className="studyListToolbar clearfix">
          <div className="header pull-left">Study List</div>
          <div className="studyCount pull-right">
            {this.props.numberOfStudies}
          </div>
          <div className="pull-right">
            {
              <StudylistToolbar
                studyListFunctionsEnabled={this.props.studyListFunctionsEnabled}
                onImport={this.props.onImport}
              />
            }
          </div>
        </div>
        <div className="theadBackground" />
        <div id="studyListContainer">
          <table id="tblStudyList" className="studylistResult table noselect">
            <thead>
              <tr>
                <th className="patientName">
                  <div
                    id="_patientName"
                    className="sortingCell"
                    onClick={this.onSortClick('patientName')}
                  >
                    <span>Patient Name</span>
                    <i className={this.state.sortClasses.patientName}>&nbsp;</i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    id="patientName"
                    value={this.state.patientName}
                    onKeyDown={this.onInputKeydown}
                    onChange={this.getChangeHandler('patientName')}
                  />
                </th>
                <th className="patientId">
                  <div
                    id="_patientId"
                    className="sortingCell"
                    onClick={this.onSortClick('patientId')}
                  >
                    <span>MRN</span>
                    <i className={this.state.sortClasses.patientId}>&nbsp;</i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    id="patientId"
                    value={this.state.patientId}
                    onKeyDown={this.onInputKeydown}
                    onChange={this.getChangeHandler('patientId')}
                  />
                </th>
                <th className="accessionNumber">
                  <div
                    id="_accessionNumber"
                    className="sortingCell"
                    onClick={this.onSortClick('accessionNumber')}
                  >
                    <span>Accession #</span>
                    <i className={this.state.sortClasses.accessionNumber}>
                      &nbsp;
                    </i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    id="accessionNumber"
                    value={this.state.accessionNumber}
                    onKeyDown={this.onInputKeydown}
                    onChange={this.getChangeHandler('accessionNumber')}
                  />
                </th>
                <th className="studyDate">
                  <div
                    id="_studyDate"
                    className="sortingCell"
                    onClick={this.onSortClick('studyDate')}
                  >
                    <span>Study Date</span>
                    <i className={this.state.sortClasses.studyDate}>&nbsp;</i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    name="daterange"
                    id="studyDate"
                    value={this.state.studyDateRange}
                    onChange={this.getChangeHandler('studyDateRange')}
                  />
                </th>
                <th className="modality">
                  <div
                    id="_modality"
                    className="sortingCell"
                    onClick={this.onSortClick('modality')}
                  >
                    <span>Modality</span>
                    <i className={this.state.sortClasses.modality}>&nbsp;</i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    id="modality"
                    onKeyDown={this.onInputKeydown}
                    value={this.state.modality}
                    onChange={this.getChangeHandler('modality')}
                  />
                </th>
                <th className="studyDescription">
                  <div
                    id="_studyDescription"
                    className="sortingCell"
                    onClick={this.onSortClick('studyDescription')}
                  >
                    <span>Study Description</span>
                    <i className={this.state.sortClasses.studyDescription}>
                      &nbsp;
                    </i>
                  </div>
                  <input
                    type="text"
                    className="form-control studylist-search"
                    id="studyDescription"
                    onKeyDown={this.onInputKeydown}
                    value={this.state.studyDescription}
                    onChange={this.getChangeHandler('studyDescription')}
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
          <PaginationArea
            currentPage={this.state.searchData.currentPage}
            nextPageFunc={this.onPageChange}
            prevPageFunc={this.onPageChange}
            onPageSizeChange={this.onPageSizeChange}
            pageSize={this.state.searchData.pageSize}
          />

          {this.renderIsLoading()}
          {this.renderHasError()}
          {this.renderNoMachingResults()}
        </div>
      </div>
    );
  }
}

export default StudyList;
