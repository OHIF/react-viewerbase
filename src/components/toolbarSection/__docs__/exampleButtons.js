export default [
  {
    command: 'PanTool',
    type: 'tool',
    text: 'Pan',
    svgUrl: '/icons.svg#icon-tools-pan',
    active: false,
  },
  {
    command: 'ZoomTool',
    type: 'tool',
    text: 'Zoom',
    svgUrl: '/icons.svg#icon-tools-zoom',
    active: false,
  },
  {
    command: 'Bidirectional',
    type: 'tool',
    text: 'Bidirectional',
    svgUrl: '/icons.svg#icon-tools-measure-target',
    active: false,
  },
  {
    command: 'StackScroll',
    type: 'tool',
    text: 'Stack Scroll',
    svgUrl: '/icons.svg#icon-tools-stack-scroll',
    active: false,
  },
  {
    command: 'reset',
    type: 'command',
    text: 'Reset',
    svgUrl: '/icons.svg#icon-tools-reset',
    active: false,
  },
  {
    command: 'WwwcTool',
    type: 'tool',
    text: 'Manual',
    svgUrl: '/icons.svg#icon-tools-levels',
    active: true,
  },
  {
    text: 'More',
    svgUrl: '/icons.svg#icon-tools-reset',
    buttons: [
      {
        command: 'reset2',
        type: 'command',
        text: 'Reset 2',
        svgUrl: '/icons.svg#icon-tools-reset',
        active: false,
      },
      {
        command: 'WwwcTool2',
        type: 'tool',
        text: 'Manual 2',
        svgUrl: '/icons.svg#icon-tools-levels',
        active: false,
      },
    ],
  },
]
