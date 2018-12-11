import React, { Component } from 'react';
import { CineDialog } from 'react-viewerbase';

class CineDialogExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isPlaying: false,
            cineFrameRate: 24,
            isLoopEnabled: true
        };
    }

    onClickSkipToStart = (event) => {
        this.setState({
            lastChange: 'Clicked Skip to Start Button'
        });
    }
    onClickSkipToEnd = (event) => {
        this.setState({
            lastChange: 'Clicked Skip to End Button'
        });
    }
    onClickNextButton = (event) => {
        this.setState({
            lastChange: 'Clicked Next Button'
        });
    }
    onClickBackButton = (event) => {
        this.setState({
            lastChange: 'Clicked Back Button'
        });
    }
    onLoopChanged = (value) => {
        this.setState({
            isLoopEnabled: value
        })
    }
    onFrameRateChanged = (value) => {
        this.setState({
            cineFrameRate: value
        });
    }
    onPlayPauseChanged = (event) => {
        this.setState({
            isPlaying: !this.state.isPlaying
        });
    }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <h3>CINE Dialog</h3>
          <p>Used to control a playing CINE clip inside a viewport</p>
          <p>State changed to {JSON.stringify(this.state, null, 2)}</p>
        </div>
        <div className="col-xs-12 col-lg-6" style={{padding: '1rem'}}>
          <CineDialog
            isPlaying={this.state.isPlaying}
            cineFrameRate={this.state.cineFrameRate}
            onPlayPauseChanged={this.onPlayPauseChanged} 
            onFrameRateChanged={this.onFrameRateChanged} 
            onLoopChanged={this.onLoopChanged} 
            onClickNextButton={this.onClickNextButton} 
            onClickBackButton={this.onClickBackButton}
            onClickSkipToStart={this.onClickSkipToStart}
            onClickSkipToEnd={this.onClickSkipToEnd} 
            />
        </div>
      </div>
    );
  }
}

export default CineDialogExample;
