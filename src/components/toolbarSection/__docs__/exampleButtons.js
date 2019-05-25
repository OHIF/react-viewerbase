export default [
  {
    command: 'PanTool',
    type: 'tool',
    text: 'Pan',
    iconName: 'tool-pan',
    active: false,
  },
  {
    command: 'ZoomTool',
    type: 'tool',
    text: 'Zoom',
    iconName: 'tool-zoom',
    active: false,
  },
  {
    command: 'Bidirectional',
    type: 'tool',
    text: 'Bidirectional',
    iconName: 'tool-measure-target',
    active: false,
  },
  {
    command: 'StackScroll',
    type: 'tool',
    text: 'Stack Scroll',
    iconName: 'tool-stack-scroll',
    active: false,
  },
  {
    command: 'reset',
    type: 'command',
    text: 'Reset',
    iconName: 'tool-reset',
    active: false,
  },
  {
    command: 'WwwcTool',
    type: 'tool',
    text: 'Manual',
    iconName: 'tool-level',
    active: true,
  },
  {
    text: 'More',
    iconName: 'tool-more',
    buttons: [
      {
        command: 'reset2',
        type: 'command',
        text: 'Reset 2',
        iconName: 'tool-reset',
        active: false,
      },
      {
        command: 'WwwcTool2',
        type: 'tool',
        text: 'Manual 2',
        iconName: 'tool-level',
        active: false,
      },
    ],
  },
]
