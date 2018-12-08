import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LayoutChooser from './LayoutChooser';

export class LayoutButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: props.dropdownVisible
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onClick() {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible
    });
  }
  onChange(selectedCell) {
    if (this.props.onChange) {
      this.props.onChange(selectedCell);
    }
  }
  static defaultProps = {
    dropdownVisible: false
  };
  static propTypes = {
    dropdownVisible: PropTypes.bool.isRequired,
    onClick: PropTypes.func
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
        <LayoutChooser
          cellSize={20}
          visible={this.state.dropdownVisible}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
export default LayoutButton;
