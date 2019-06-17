import React, { useState, useEffect } from 'react';
import i18n from '@ohif/i18n';

import './LanguageSwitcher.styl';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState();
  const languages = [
    // TODO: list of available languages should come from i18n.options.resources
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'es',
      label: 'Spanish',
    },
  ];

  const getCurrentLanguage = (language = i18n.language) =>
    language.split('-')[0];

  const onChange = () => {
    const { value } = event.target;
    const language = getCurrentLanguage(value);
    setCurrentLanguage(language);

    i18n.init({
      fallbackLng: language,
      lng: language,
    });
  };

  useEffect(() => {
    setCurrentLanguage(getCurrentLanguage());
  }, []);

  return (
    <select
      name="language-select"
      id="language-select"
      className="language-select"
      value={currentLanguage}
      onChange={onChange}
    >
      {languages.map(language => (
        <option key={language.value} value={language.value}>
          {language.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
