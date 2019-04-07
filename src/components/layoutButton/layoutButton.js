import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { LayoutChooser } from './layoutChooser';
import ToolbarButton from './../../viewer/ToolbarButton';

export class LayoutButton extends PureComponent {
  static defaultProps = {
    dropdownVisible: false
  };

  static propTypes = {
    dropdownVisible: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    selectedCell: PropTypes.object
  };

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
        <ToolbarButton
          active={this.state.dropdownVisible}
          text={'Layout'}
          iconClasses={'fa fa-th-large'}
          onClick={this.onClick}
        />
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

export default LayoutButton;
