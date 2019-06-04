// import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next';
import React from 'react';
import i18n from 'ohif-i18n';

const Wrapper = ({ children }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

export default Wrapper;
