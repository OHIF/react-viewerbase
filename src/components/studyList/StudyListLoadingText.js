import React from 'react';
import { Icon } from './../Icon';

function StudyListLoadingText() {
  return (
    <div className="loading-text">
      Loading... <Icon name="circle-notch" animation="pulse" />
    </div>
  );
}

export { StudyListLoadingText };
