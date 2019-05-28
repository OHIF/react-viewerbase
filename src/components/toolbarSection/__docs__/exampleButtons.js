export default [
  {
    command: 'PanTool',
    type: 'tool',
    text: 'Pan',
    icon: 'tool-pan',
    active: false,
  },
  {
    command: 'ZoomTool',
    type: 'tool',
    text: 'Zoom',
    icon: 'tool-zoom',
    active: false,
  },
  {
    command: 'Bidirectional',
    type: 'tool',
    text: 'Bidirectional',
    icon: 'tool-measure-target',
    active: false,
  },
  {
    command: 'StackScroll',
    type: 'tool',
    text: 'Stack Scroll',
    icon: 'tool-stack-scroll',
    active: false,
  },
  {
    command: 'reset',
    type: 'command',
    text: 'Reset',
    icon: 'tool-reset',
    active: false,
  },
  {
    command: 'WwwcTool',
    type: 'tool',
    text: 'Manual',
    icon: 'tool-level',
    active: true,
  },
  {
    text: 'More',
    icon: 'tool-more',
    buttons: [
      {
        command: 'reset2',
        type: 'command',
        text: 'Reset 2',
        icon: 'tool-reset',
        active: false,
      },
      {
        command: 'WwwcTool2',
        type: 'tool',
        text: 'Manual 2',
        icon: 'tool-level',
        active: false,
      },
    ],
  },
]
