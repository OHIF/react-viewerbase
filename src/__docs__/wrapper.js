import React from 'react';
import i18n from '@ohif/i18n';
import { I18nextProvider } from 'react-i18next';

import PropTypes from 'prop-types';
import LanguageSwitcher from '../components/languageSwitcher';

import './wrapper.styl';

const Wrapper = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <div className="sidebarLanguageSwitcher">
      <strong>Display components in:</strong>
      <LanguageSwitcher />
    </div>
    {children}
  </I18nextProvider>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
