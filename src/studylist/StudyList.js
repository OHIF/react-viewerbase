import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StudyList.css';

class StudyList extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    studies: PropTypes.array
  };

  render() {
    return <div className="StudyList">'studies'</div>;
  }
}

export default StudyList;
