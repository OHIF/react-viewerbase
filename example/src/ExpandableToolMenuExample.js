import React from 'react';
import { ExpandableToolMenu } from 'react-viewerbase';

const componentStyle = {
  backgroundColor: 'var(--primary-background-color)',
  width: '120px',
  height: '60px',
  padding: '5px',
}

const exampleButtons = [
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
  },
];

class ExpandableToolMenuExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCommand: '<none>'
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h3>Expandable Tool Menu Button</h3>
        </div>
        <div className="col-xs-12 col-lg-6">
          <p>Active command is: {this.state.activeCommand}</p>
        </div>
        <div className="col-xs-12 col-lg-6">
          <div style={componentStyle}>
            <ExpandableToolMenu
              buttons={exampleButtons}
              activeCommand={this.state.activeCommand}
              onToolSelected={(command) => {
                this.setState({
                  activeCommand: command
                })
              }}
            />
          </div>
        </div>
      </div>
      
    )
  }
}

export default ExpandableToolMenuExample;