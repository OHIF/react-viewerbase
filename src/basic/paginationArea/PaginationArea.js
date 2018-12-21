import React, { Component } from 'react';
import './PaginationArea.styl';

class PaginationArea extends Component {
  constructor(props) {
    super(props);
    this.currentPage = this.props.currentPage || 0;
    this.pageOptions = this.props.pageOptions || [1, 2, 3, 5, 8];
    this.pageSize = this.props.pageSize || 10;
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.onPageSizeChange = this.onPageSizeChange.bind(this);
  }

  nextPage() {
    alert(this.props.numberOfPages);
    this.currentPage = this.currentPage + 1;
    this.props.nextPageFunc(this.currentPage);
  }

  prevPage() {
    this.currentPage = this.currentPage - 1;
    this.props.nextPageFunc(this.currentPage);
  }

  onPageSizeChange(event) {
    this.props.onPageSizeChange(event.target.value);
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
                  disabled={this.currentPage === 0}
                  className="btn page-link"
                >
                  Previous
                </button>
              </li>
              <li className="page-item next">
                <button
                  onClick={this.nextPage}
                  disabled={this.currentPage === this.props.numberOfPages - 1}
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

  renderPageSizeDropdown() {
    return (
      <div className="form-inline form-group rows-per-page">
        <span>Show</span>
        <select onChange={this.onPageSizeChange}>
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
              {this.renderPageSizeDropdown()}
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
