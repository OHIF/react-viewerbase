import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import './SimpleDialog.styl';

class SimpleDialog extends Component {
  static defaultProps = {
    isOpen: true,
    componentStyle: {},
    rootClass: ''
  };

  render() {
    return (
      <>
        {this.props.isOpen && (
          <div
            className={`simpleDialog ${this.props.rootClass} `}
            ref={this.props.componentRef}
            style={this.props.componentStyle}
          >
            <form>
              <div className="header">
                <span className="closeBtn" onClick={this.onClose}>
                  <span className="closeIcon">x</span>
                </span>
                <h4 className="title">{this.props.headerTitle}</h4>
              </div>
              <div className="content">{this.props.children}</div>
              <div className="footer">
                <button className="btn btn-default" onClick={this.onClose}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={this.onConfirm}>
                  Confirm
                </button>
              </div>
            </form>
          </div>
        )}
      </>
    );
  }

  onClose = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onClose();
  };

  onConfirm = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onConfirm();
  };
}

SimpleDialog.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default SimpleDialog;
