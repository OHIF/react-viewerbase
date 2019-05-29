import React from 'react';
import { Icon } from './../Icon';

function StudyListLoadingText() {
  return (
    <div className="loading-text">
      Loading... <Icon name="spinner" animation="pulse" />
    </div>
  );
}

export { StudyListLoadingText };
