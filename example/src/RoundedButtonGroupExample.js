import React, { Component } from 'react';
import { RoundedButtonGroup } from 'react-viewerbase';

class RoundedButtonGroupExample extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: null
    };

    this.options = [
      {
        value: 'studies',
        svgLink: '/icons.svg#icon-studies',
        svgWidth: 15,
        svgHeight: 13,
        bottomLabel: 'Series'
      },
      {
        value: 'measurements',
        svgLink: '/icons.svg#icon-measurements-lesions',
        svgWidth: 18,
        svgHeight: 10,
        bottomLabel: 'Measurements'
      }
    ]
  }

  onValueChanged = (value) => {
    this.setState({
      value
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <h3>Rounded Button Group</h3>
          <p>A basic styled toggle switch</p>
          <p>Value changed to {JSON.stringify(this.state, null, 2)}</p>
        </div>
        <div className="col-xs-12 col-lg-6" style={{padding: '1rem', backgroundColor: 'black'}}>
          <RoundedButtonGroup
            options={this.options}
            value={this.state.value}
            onValueChanged={this.onValueChanged}
          />
        </div>
    </div>
  );
  }
}

export default RoundedButtonGroupExample;
