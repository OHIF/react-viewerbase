import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LayoutChooser from './LayoutChooser';

export default class LayoutButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownVisible: props.dropdownVisible
    };
  }

  static defaultProps = {
    dropdownVisible: false
  };

  static propTypes = {
    dropdownVisible: PropTypes.bool.isRequired
  };

  render() {
    return (
      <div className="btn-group">
        <button
          id="layout"
          type="button"
          className="btn btn-sm btn-default dropdown-toggle"
          data-container="body"
          data-toggle="dropdown"
          aria-expanded="false"
          data-placement="right"
          title="Layout"
          rel="tooltip"
          onClick={this.onClick}
        >
          <span className="fa fa-th-large" />
        </button>
        <LayoutChooser visible={this.state.dropdownVisible} />
      </div>
    );
  }

  onClick = () => {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible
    });
  };
}
