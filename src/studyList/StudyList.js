import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './StudyList.styl';

import StudylistToolbar from './StudyListToolbar';
import LoadingText from '../basic/LoadingText';
import PaginationArea from '../basic/paginationArea/PaginationArea';

export default class StudyList extends Component {
  static propTypes = {
    studies: PropTypes.array.isRequired,
    onSelectItem: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    studyCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    studyListFunctionsEnabled: PropTypes.bool,
    defaultSort: PropTypes.shape({
      field: PropTypes.string.isRequired,
      order: PropTypes.oneOf(['desc', 'asc']).isRequired
    }),
    onImport: PropTypes.func
  };

  static DEFAULT_SORTABLE_ICON_CLS = 'fa fa-fw fa-sort';
  static DESC_SORT_ICON_CLS = 'fa fa-fw fa-sort-desc';
  static ASC_SORT_ICON_CLS = 'fa fa-fw fa-sort-asc';

  constructor(props) {
    super(props);

    const sortData = {};
    const sortClasses = {
      patientName: StudyList.DEFAULT_SORTABLE_ICON_CLS,
      patientId: StudyList.DEFAULT_SORTABLE_ICON_CLS,
      accessionNumber: StudyList.DEFAULT_SORTABLE_ICON_CLS,
      studyDate: StudyList.DEFAULT_SORTABLE_ICON_CLS,
      modality: StudyList.DEFAULT_SORTABLE_ICON_CLS,
      studyDescription: StudyList.DEFAULT_SORTABLE_ICON_CLS
    };

    if (props.defaultSort) {
      sortData.field = props.defaultSort.field;
      sortData.order = props.defaultSort.order;
      sortClasses[props.defaultSort.field] =
        props.defaultSort.order === 'desc'
          ? StudyList.DESC_SORT_ICON_CLS
          : StudyList.ASC_SORT_ICON_CLS;
    }

    this.state = {
      loading: false,
      sortClasses,
      searchData: {
        sortData,
        currentPage: this.props.currentPage || 0,
        pageSize: this.props.pageSize || 10
      },
      highlightedItem: ''
    };

    this.getChangeHandler = this.getChangeHandler.bind(this);
    this.onInputKeydown = this.onInputKeydown.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.onPageSizeChange = this.onPageSizeChange.bind(this);
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

      // reset the page because user is doing a new search
      this.setSearchData('currentPage', 0, this.search);
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

  nextPage(currentPage) {
    currentPage = currentPage + 1;
    this.setSearchData('currentPage', currentPage, this.search);
  }

  prevPage(currentPage) {
    currentPage = currentPage - 1;
    this.setSearchData('currentPage', currentPage, this.search);
  }

  onPageSizeChange(pageSize) {
    this.setSearchData('pageSize', pageSize, this.search);
  }

  onSortClick(key) {
    return () => {
      const sortClasses = this.state.sortClasses;
      let order;

      if (sortClasses[key] === StudyList.ASC_SORT_ICON_CLS) {
        sortClasses[key] = StudyList.DESC_SORT_ICON_CLS;
        order = 'desc';
      } else {
        sortClasses[key] = StudyList.ASC_SORT_ICON_CLS;
        order = 'asc';
      }

      Object.keys(sortClasses).forEach(sortClassKey => {
        if (sortClassKey !== key) {
          sortClasses[sortClassKey] = StudyList.DEFAULT_SORTABLE_ICON_CLS;
        }
      });

      this.setState({ sortClasses }, () => {
        this.setSearchData('sortData', { field: key, order }, this.search);
      });
    };
  }

  onHighlightItem(studyItemUid) {
    this.setState({ highlightedItem: studyItemUid });
  }

  renderTableRow(study) {
    return (
      <tr
        key={study.studyInstanceUID}
        className={
          this.state.highlightedItem === study.studyInstanceUID
            ? 'studylistStudy noselect active'
            : 'studylistStudy noselect'
        }
        onClick={() => {
          this.onHighlightItem(study.studyInstanceUID);
        }}
        onMouseDown={event => {
          // middle/wheel click
          if (event.button === 1) {
            this.props.onSelectItem(study.studyInstanceUID);
          }
        }}
        onDoubleClick={() => {
          this.props.onSelectItem(study.studyInstanceUID);
        }}
      >
        <td className="patientName">{study.patientName}</td>
        <td className="patientId">{study.patientId}</td>
        <td className="accessionNumber">{study.accessionNumber}</td>
        <td className="studyDate">{study.studyDate}</td>
        <td className="modalities">{study.modalities}</td>
        <td className="studyDescription">{study.studyDescription}</td>
      </tr>
    );
  }

  render() {
    return (
      <div className="StudyList">
        <div className="studyListToolbar clearfix">
          <div className="header pull-left">Study List</div>
          <div className="studyCount pull-right">{this.props.studyCount}</div>
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
                  {/* TODO: should we use some date range component?
                  OHIF nowadays uses this: http://www.daterangepicker.com/
                  */}
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
                return this.renderTableRow(study);
              })}
            </tbody>
          </table>

          {this.renderIsLoading()}
          {this.renderHasError()}
          {this.renderNoMachingResults()}

          <PaginationArea
            currentPage={this.state.searchData.currentPage}
            nextPageFunc={this.nextPage}
            prevPageFunc={this.prevPage}
            onPageSizeChange={this.onPageSizeChange}
            pageSize={this.state.searchData.pageSize}
            numberOfPages={Math.ceil(
              this.props.studyCount / this.state.searchData.pageSize
            )}
          />
        </div>
      </div>
    );
  }
}
