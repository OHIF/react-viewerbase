import React, { Component } from 'react';

class StudylistToolbar extends Component {
  clear(e) {
    e.target.value = null;
  }

  getImportTool() {
    if (this.props.importSupported && this.props.studyListFunctionsEnabled) {
      return (
        <div className="addNewStudy btn-file">
          <label htmlFor="btnImport">
            <i className="fa fa-plus" />
            Import study
          </label>
          <input
            id="btnImport"
            onChange={this.props.importStudyFunction}
            onClick={this.clear}
            className="js-import-files"
            type="file"
            webkitdirectory="true"
            directory="true"
            multiple={true}
          />
        </div>
      );
    }
  }

  render() {
    return <div className="studylistToolbar">{this.getImportTool()}</div>;
  }
}

export default StudylistToolbar;
