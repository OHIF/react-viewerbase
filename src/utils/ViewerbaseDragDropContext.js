import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// See https://github.com/react-dnd/react-dnd/issues/186#issuecomment-335429067
// TODO: Find a way for this context to be used in the parent application as well.
export default function ViewerbaseDragDropContext(DecoratedClass) {
  return DragDropContext(HTML5Backend, null, true)(DecoratedClass);
}
