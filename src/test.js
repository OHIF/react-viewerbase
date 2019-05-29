import * as ReactViewerbase from './index.js';

describe('Top level exports', () => {
  test('have not changed', () => {
    const expectedExports = [
      'CineDialog',
      'Dropdown',
      'ExpandableToolMenu',
      'ExampleDropTarget',
      'LayoutButton',
      'LayoutChooser',
      'LayoutManager',
      'LayoutPanelDropTarget',
      'MeasurementTable',
      'MeasurementTableItem',
      'Overlay',
      'OverlayTrigger',
      'PlayClipButton',
      'QuickSwitch',
      'RoundedButtonGroup',
      'ScrollableArea',
      'SelectTree',
      'SimpleDialog',
      'StudyBrowser',
      'StudyList',
      'TableList',
      'TableListItem',
      'ThumbnailEntry',
      'Toolbar',
      'ToolbarButton',
      'ToolbarSection',
      'Tooltip',
      'UserPreferences',
      'UserPreferencesModal',
      'ViewerbaseDragDropContext',
    ].sort();

    const exports = Object.keys(ReactViewerbase).sort();

    expect(exports).toEqual(expectedExports);
  });
});
