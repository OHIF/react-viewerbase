import React from 'react';
export function RemovableBackdrop() {
  return (
    <div
      className="removableBackdrop noselect"
      oncontextmenu="return false;"
      unselectable="on"
      onselectstart="return false;"
    />
  );
}
export default RemovableBackdrop;
