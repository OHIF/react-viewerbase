import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from './../../elements/Icon';

export class RadioButtonList extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    for (let button of props.description) {
      if (button.checked) {
        this.state.checked = button.id;
      }
    }

    let handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ checked: e.target.value });
  }

  render() {
    let buttons = this.props.description.map(button => {
      let input = (
        <input
          type="radio"
          checked={this.state.checked === button.id}
          onChange={e => {
            this.handleChange(e);
          }}
          value={button.id}
        />
      );

      return (
        <div className="ohif-radio-button" key={button.id}>
          <label>
            {input}
            {button.label}
          </label>
        </div>
      );
    });

    return (
      <div className="ohif-radio-button-group">
        <form>{buttons}</form>
      </div>
    );
  }
}
