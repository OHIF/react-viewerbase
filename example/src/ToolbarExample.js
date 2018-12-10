import React, { Component } from 'react';
import { ToolbarSection } from 'react-viewerbase';

class ToolbarExample extends Component {
    constructor(props) {
      super(props);

      this.exampleButtons = [
        {
          command: 'PanTool',
          type: 'tool',
          text: 'Pan',
          svgUrl: '/icons.svg#icon-tools-pan',
          active: false
        },
        {
          command: 'ZoomTool',
          type: 'tool',
          text: 'Zoom',
          svgUrl: '/icons.svg#icon-tools-zoom',
          active: false
        },
        {
          command: 'Bidirectional',
          type: 'tool',
          text: 'Bidirectional',
          svgUrl: '/icons.svg#icon-tools-measure-target',
          active: false
        },
        {
          command: 'StackScroll',
          type: 'tool',
          text: 'Stack Scroll',
          svgUrl: '/icons.svg#icon-tools-stack-scroll',
          active: false
        },
        {
          command: 'reset',
          type: 'command',
          text: 'Reset',
          svgUrl: '/icons.svg#icon-tools-reset',
          active: false
        },
        {
          command: 'WwwcTool',
          type: 'tool',
          text: 'Manual',
          svgUrl: '/icons.svg#icon-tools-levels',
          active: true
        }
      ];

      this.state = {
          buttons: this.exampleButtons,
      };
    }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <h3>Toolbar Section</h3>
          <p>A basic row of buttons for a toolbar.</p>
        </div>
        <div className="col-xs-12 col-lg-6">
          <ToolbarSection
            buttons={this.state.buttons}
            activeCommand={this.state.activeCommand}
          />
        </div>
      </div>
    );
  }
}

export default ToolbarExample;
