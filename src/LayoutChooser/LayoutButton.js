import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LayoutChooser from './LayoutChooser';

export class LayoutButton extends PureComponent {
  state = {
    dropdownVisible: this.props.dropdownVisible
  };

  componentDidUpdate(prevProps) {
    if (this.props.dropdownVisible !== prevProps.dropdownVisible) {
      this.setState({
        dropdownVisible: this.props.dropdownVisible
      });
    }
  }

  onClick = () => {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible
    });
  };

  onChange = selectedCell => {
    if (this.props.onChange) {
      this.props.onChange(selectedCell);
    }
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
          visible={this.state.dropdownVisible}
          onChange={this.onChange}
          onClick={this.onClick}
          selectedCell={this.props.selectedCell}
        />
      </div>
    );
  }
}

LayoutButton.defaultProps = {
  dropdownVisible: false
}

LayoutButton.propTypes = {
  dropdownVisible: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  selectedCell: PropTypes.object
}

export default LayoutButton;
