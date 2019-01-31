import React from 'react';
import { ExtendedToolbarMenu } from 'react-viewerbase';

const componentStyle = {
  backgroundColor: 'var(--primary-background-color)',
  width: '60px',
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

class ExtendedToolbarMenuExample extends React.Component {
  render() {
    return (
      <div style={componentStyle}>
        <ExtendedToolbarMenu
          buttons={exampleButtons}
        />
      </div>
    )
  }
}

export default ExtendedToolbarMenuExample;