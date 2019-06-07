import React from 'react';
import i18n, { I18nextProvider } from 'ohif-i18n';
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
