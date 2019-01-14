import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './CineDialog.styl';

class CineDialog extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cineFrameRate: props.cineFrameRate,
      isPlaying: props.isPlaying
    };
  }

  static propTypes = {
    cineMinFrameRate: PropTypes.number.isRequired,
    cineMaxFrameRate: PropTypes.number.isRequired,
    cineStepFrameRate: PropTypes.number.isRequired,
    cineFrameRate: PropTypes.number.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    onPlayPauseChanged: PropTypes.func,
    onFrameRateChanged: PropTypes.func,
    onClickNextButton: PropTypes.func,
    onClickBackButton: PropTypes.func,
    onClickSkipToStart: PropTypes.func,
    onClickSkipToEnd: PropTypes.func
  };

  static defaultProps = {
    cineMinFrameRate: 1,
    cineMaxFrameRate: 90,
    cineStepFrameRate: 1,
    cineFrameRate: 24,
    isPlaying: false
  };

  componentDidUpdate(prevProps) {
    // TODO: Not sure if we should just switch this to a stateless
    // fully-controlled component instead
    if (
      this.props.isPlaying !== prevProps.isPlaying ||
      this.props.isPlaying !== this.state.isPlaying
    ) {
      this.setState({
        isPlaying: this.props.isPlaying
      });
    }

    if (
      this.props.cineFrameRate !== prevProps.cineFrameRate ||
      this.props.cineFrameRate !== this.state.cineFrameRate
    ) {
      this.setState({
        cineFrameRate: this.props.cineFrameRate
      });
    }
  }

  handleInputChange = event => {
    const target = event.target;

    let value = target.value;

    if (target.type === 'range') {
      value = parseFloat(target.value);
    }

    const name = target.name;

    this.setState({
      [name]: value
    });

    if (name === 'cineFrameRate' && this.props.onFrameRateChanged) {
      this.props.onFrameRateChanged(parseFloat(value));
    }
  };

  onClickPlayPause = () => {
    const value = !this.state.isPlaying;

    this.setState({
      isPlaying: value
    });

    if (this.props.onPlayPauseChanged) {
      this.props.onPlayPauseChanged(value);
    }
  };

  onClickNextButton = event => {
    if (this.props.onClickNextButton) {
      this.props.onClickNextButton(event);
    }
  };

  onClickBackButton = event => {
    if (this.props.onClickBackButton) {
      this.props.onClickBackButton(event);
    }
  };

  onClickSkipToStart = event => {
    if (this.props.onClickSkipToStart) {
      this.props.onClickSkipToStart(event);
    }
  };

  onClickSkipToEnd = event => {
    if (this.props.onClickSkipToEnd) {
      this.props.onClickSkipToEnd(event);
    }
  };

  // TODO:
  // - Add next / previous display set buttons which just call
  // onClickNextDisplaySet and onClickPreviousDisplaySet which are passed in as props.
  // See https://github.com/OHIF/Viewers/blob/master/Packages/ohif-viewerbase/client/components/viewer/cineDialog/cineDialog.html#L38
  // - Add 'isEnabled' prop: https://github.com/OHIF/Viewers/blob/master/Packages/ohif-viewerbase/client/components/viewer/cineDialog/cineDialog.js#L301
  render() {
    return (
      <div className="CineDialog">
        <div className="noselect double-row-style">
          <div className="cine-controls">
            <div className="btn-group">
              <button
                id="cineFirstButton"
                title="Skip to first image"
                className="btn"
                data-toggle="tooltip"
                onClick={this.onClickSkipToStart}
              >
                <i className="fa fa-lg fa-fast-backward" />
              </button>
              <button
                id="cineBackButton"
                title="Previous image"
                className="btn"
                data-toggle="tooltip"
                onClick={this.onClickBackButton}
              >
                <i className="fa fa-lg fa-step-backward" />
              </button>
              <button
                id="cinePlayButton"
                title="Play / Stop"
                className="btn"
                data-toggle="tooltip"
                onClick={this.onClickPlayPause}
              >
                <i
                  className={
                    this.state.isPlaying
                      ? 'fa fa-lg fa-stop'
                      : 'fa fa-lg fa-play'
                  }
                />
              </button>
              <button
                id="cineNextButton"
                title="Next image"
                className="btn"
                data-toggle="tooltip"
                onClick={this.onClickNextButton}
              >
                <i className="fa fa-lg fa-step-forward" />
              </button>
              <button
                id="cineLastButton"
                title="Skip to last image"
                className="btn"
                data-toggle="tooltip"
                onClick={this.onClickSkipToEnd}
              >
                <i className="fa fa-lg fa-fast-forward" />
              </button>
            </div>
          </div>
          <div className="cine-options">
            <div className="fps-section">
              <input
                type="range"
                name="cineFrameRate"
                id="cineSlider"
                min={this.props.cineMinFrameRate}
                max={this.props.cineMaxFrameRate}
                step={this.props.cineStepFrameRate}
                value={this.state.cineFrameRate}
                onChange={this.handleInputChange}
              />
            </div>
            <span className="fps">
              {this.state.cineFrameRate.toFixed(1)} fps
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CineDialog;
