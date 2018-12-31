import React, { Component } from 'react';
import './PaginationArea.styl';

class PaginationArea extends Component {
  constructor(props) {
    super(props);
    this.pageOptions = this.props.pageOptions || [5, 10, 25, 50, 100];
    this.rowsPerPage = this.props.rowsPerPage || 10;
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.onRowsPerPageChange = this.onRowsPerPageChange.bind(this);
  }

  nextPage() {
    this.props.nextPageFunc(this.props.currentPage);
  }

  prevPage() {
    this.props.prevPageFunc(this.props.currentPage);
  }

  onRowsPerPageChange(event) {
    this.props.onRowsPerPageChange(parseInt(event.target.value));
  }

  renderPaginationButtons() {
    return (
      <div className="col-xs-8 col-sm-9 col-md-9">
        <div className="form-inline form-group page-buttons noselect">
          <label>
            <ul className="pagination-control no-margins">
              <li className="page-item prev">
                <button
                  onClick={this.prevPage}
                  disabled={this.props.currentPage === 0}
                  className="btn page-link"
                >
                  Previous
                </button>
              </li>
              <li className="page-item next">
                <button
                  onClick={this.nextPage}
                  disabled={
                    this.props.currentPage === this.props.numberOfPages - 1
                  }
                  className="btn page-link"
                >
                  Next
                </button>
              </li>
            </ul>
          </label>
        </div>
      </div>
    );
  }

  renderRowsPerPageDropdown() {
    return (
      <div className="form-inline form-group rows-per-page">
        <span>Show</span>
        <select
          onChange={this.onRowsPerPageChange}
          defaultValue={this.props.rowsPerPage}
        >
          {this.pageOptions.map(pageNumber => {
            return (
              <option key={pageNumber} value={pageNumber}>
                {pageNumber}
              </option>
            );
          })}
        </select>
        <span>rows per page</span>
      </div>
    );
  }

  render() {
    return (
      <div name="paginationArea">
        <div className="pagination-area">
          <div className="row">
            <div className="col-xs-4 col-sm-3 col-md-3">
              {this.renderRowsPerPageDropdown()}
            </div>
            <div className="col-xs-8 col-sm-9 col-md-9">
              <div className="form-inline form-group page-number pull-right">
                {this.renderPaginationButtons()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaginationArea;
