import React from 'react';
import i18n from '@ohif/i18n';
import { I18nextProvider } from 'react-i18next';

import PropTypes from 'prop-types';

const Wrapper = ({ children }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
