import React, { Component } from 'react';
import './PaginationArea.styl';

class PaginationArea extends Component {
  constructor(props) {
    super(props);
    this.currentPage = this.props.currentPage || 0;

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.props.nextPageFunc(this.currentPage);
  }

  prevPage() {
    this.currentPage = this.currentPage - 1;
    this.props.nextPageFunc(this.currentPage);
  }

  paginationButtons() {
    // TODO : paginationButtonsEnabled
    return (
      <div className="col-xs-8 col-sm-9 col-md-9">
        <div className="form-inline form-group page-buttons noselect">
          <label>
            <ul className="pagination-control no-margins">
              <li className="page-item prev">
                {' '}
                {/* TODO disabled */}
                <button onClick={this.prevPage} className="btn page-link">
                  Previous
                </button>
              </li>
              <li className="page-item next">
                {' '}
                {/*  TODO disabled */}
                <button onClick={this.nextPage} className="btn page-link">
                  Next
                </button>
              </li>
            </ul>
          </label>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div name="paginationArea">
        <div className="pagination-area">
          <div className="row">
            <div className="col-xs-4 col-sm-3 col-md-3">
              <div className="form-inline form-group rows-per-page">
                <span>Show</span>
                TODO - We will use select2 like in OHIF?
                {/*{> inputSelect class ='select-small' key='rowsPerPage' hideSearch=true}*/}
                <span>rows per page</span>
              </div>
            </div>
            <div className="col-xs-8 col-sm-9 col-md-9">
              <div className="form-inline form-group page-number pull-right">
                {this.paginationButtons()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaginationArea;
