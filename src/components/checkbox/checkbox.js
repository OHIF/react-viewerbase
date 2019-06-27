import React, { Component } from 'react';
import './checkbox.css';

export class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: props.checked, label: props.label };
  }

  handleChange(e) {
    this.setState({ checked: e.target.checked });
  }

  render() {
    let checkbox;
    if (this.state.checked) {
      checkbox = <span className="ohif-checkbox ohif-checked" />;
    } else {
      checkbox = <span className="ohif-checkbox" />;
    }

    return (
      <div className="ohif-check-container">
        <form>
          <label className="ohif-check-label">
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={e => {
                this.handleChange(e);
              }}
            />
            {checkbox}
            {this.state.label}
          </label>
        </form>
      </div>
    );
  }
}
