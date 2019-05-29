export default [
  {
    command: 'PanTool',
    type: 'tool',
    text: 'Pan',
    icon: 'arrows',
    active: false,
  },
  {
    command: 'ZoomTool',
    type: 'tool',
    text: 'Zoom',
    icon: 'search-plus',
    active: false,
  },
  {
    command: 'Bidirectional',
    type: 'tool',
    text: 'Bidirectional',
    icon: 'measure-target',
    active: false,
  },
  {
    command: 'StackScroll',
    type: 'tool',
    text: 'Stack Scroll',
    icon: 'bars',
    active: false,
  },
  {
    command: 'reset',
    type: 'command',
    text: 'Reset',
    icon: 'reset',
    active: false,
  },
  {
    command: 'WwwcTool',
    type: 'tool',
    text: 'Manual',
    icon: 'level',
    active: true,
  },
  {
    text: 'More',
    icon: 'more',
    buttons: [
      {
        command: 'reset2',
        type: 'command',
        text: 'Reset 2',
        icon: 'reset',
        active: false,
      },
      {
        command: 'WwwcTool2',
        type: 'tool',
        text: 'Manual 2',
        icon: 'adjust',
        active: false,
      },
    ],
  },
];
