const config = window.config || {};
const routerBaseName = config.routerBaseName || '';
const Icons = `${routerBaseName}/icons.svg`.replace('//', '/');

export default [
  {
    command: 'PanTool',
    type: 'tool',
    text: 'Pan',
    svgUrl: `${Icons}#icon-tools-pan`,
    active: false,
  },
  {
    command: 'ZoomTool',
    type: 'tool',
    text: 'Zoom',
    svgUrl: `${Icons}#icon-tools-zoom`,
    active: false,
  },
  {
    command: 'Bidirectional',
    type: 'tool',
    text: 'Bidirectional',
    svgUrl: `${Icons}#icon-tools-measure-target`,
    active: false,
  },
  {
    command: 'StackScroll',
    type: 'tool',
    text: 'Stack Scroll',
    svgUrl: `${Icons}#icon-tools-stack-scroll`,
    active: false,
  },
  {
    command: 'reset',
    type: 'command',
    text: 'Reset',
    svgUrl: `${Icons}#icon-tools-reset`,
    active: false,
  },
  {
    command: 'WwwcTool',
    type: 'tool',
    text: 'Manual',
    svgUrl: `${Icons}#icon-tools-levels`,
    active: true,
  },
  {
    text: 'More',
    svgUrl: `${Icons}#icon-tools-reset`,
    buttons: [
      {
        command: 'reset2',
        type: 'command',
        text: 'Reset 2',
        svgUrl: `${Icons}#icon-tools-reset`,
        active: false,
      },
      {
        command: 'WwwcTool2',
        type: 'tool',
        text: 'Manual 2',
        svgUrl: `${Icons}#icon-tools-levels`,
        active: false,
      },
    ],
  },
];
