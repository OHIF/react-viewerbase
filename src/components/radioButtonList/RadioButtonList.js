import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from './../../elements/Icon';

export class RadioButtonList extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    //onChange specified through props
    //FORMAT: { label : String, id?: String, checked? : Boolean, onClick ? : Function}
    this.buttons = props.description.map(button => {
      if (!button.id) {
        button.id = button.label.replace(/ /g, '');
      }

      let input;
      if (button.checked) {
        this.state.buttonChecked = button.id;
        input = (
          <input
            type="radio"
            defaultChecked
            onClick={() => {
              this.handleClick(button.id);
            }}
          />
        );
      } else {
        input = (
          <input
            type="radio"
            onClick={() => {
              this.handleClick(button.id);
            }}
          />
        );
      }

      //strip spaces out of label to make id if none is provided
      return (
        <div className="ohif-radio" key={button.id}>
          <label>
            {input}
            {button.label}
          </label>
        </div>
      );
    });
  }

  setDefaultChecked(button) {
    return button.checked ? 'defaultChecked' : '';
  }

  handleClick(e) {
    console.log('hello from handle click!');
  }

  render() {
    return (
      <div className="ohif-radio-button-group">
        <form>{this.buttons}</form>
      </div>
    );
  }
}
