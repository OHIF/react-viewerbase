import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './StudyListToolbar.styl';

class StudylistToolbar extends PureComponent {
  static propTypes = {
    studyListFunctionsEnabled: PropTypes.bool.isRequired,
    onImport: PropTypes.func
  };

  static defaultProps = {
    studyListFunctionsEnabled: true
  };

  clear(e) {
    e.target.value = null;
  }

  getImportTool() {
    if (this.props.onImport && this.props.studyListFunctionsEnabled) {
      return (
        <div className="addNewStudy btn-file">
          <label htmlFor="btnImport">
            <i className="fa fa-plus" />
            Import study
          </label>
          <input
            id="btnImport"
            onChange={this.props.onImport}
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
