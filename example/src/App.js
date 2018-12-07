import React, { Component } from 'react';
import './initCornerstone';
import { LayoutButton } from 'react-viewerbase';

export default class App extends Component {
  render () {
    return (
      <div className="container">
      <div className="row">
        <h2>React Imaging Application Components</h2>
      </div>
        <div className="row">
          <div className='col-xs-12'>
            <h4>What is this?</h4>
            <p>A set of re-usable components for build medical imaging applications. We use these to build the <a href="http://ohif.org" target="_blank" rel="noopener noreferrer">OHIF Viewer</a>.
            </p>
          </div>
          <hr></hr>
        </div>
        <div className="row">
          <h3>Examples</h3>
          <div className='col-xs-12 col-lg-6'>
            <h2>Layout Button</h2>
            <p>Used to choose which layout to place the viewer into.</p>
          </div>
          <div className='col-xs-12 col-lg-6'>
            <LayoutButton/>
          </div>
        </div>
      </div>
    )
  }
}
