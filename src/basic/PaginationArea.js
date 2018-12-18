import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

class PaginationArea extends Component {
  render() {
    return (
      <div name="paginationArea">
        <form className="pagination-area">
          <div class="row">
            <div class="col-xs-4 col-sm-3 col-md-3">
              <div class="form-inline form-group rows-per-page">
                <span>Show</span>
                TODO - We will use select2 like in OHIF?
                {/*{> inputSelect class ='select-small' key='rowsPerPage' hideSearch=true}*/}
                <span>rows per page</span>
              </div>
            </div>
            <div class="col-xs-8 col-sm-9 col-md-9">
              <div class="form-inline form-group page-number">
                <ReactPaginate
                  previousLabel={'<<'}
                  nextLabel={'>>'}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={this.props.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.props.handlePageClick}
                  containerClassName={'pagination'}
                  subContainerClassName={'pages pagination'}
                  activeClassName={'active'}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PaginationArea;
