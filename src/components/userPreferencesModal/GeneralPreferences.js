import React, { Component } from 'react';
import './GeneralPreferences.styl';
import i18n from '@ohif/i18n';

export class GeneralPreferences extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: i18n.language,
      // TODO: list of available languages should come from i18n.options.resources
      languages: [
        {
          value: 'en-US',
          label: 'English',
        },
        {
          value: 'es',
          label: 'Spanish',
        },
      ],
    };
  }

  onChange(event) {
    const language = event.target.value;

    this.setState({ language });

    i18n.init({
      fallbackLng: language.substring(0, 2),
      lng: language,
    });
  }

  renderLanguageOptions = (val, label) => {
    return this.state.languages.map(language => (
      <option key={language.value} value={language.value}>
        {language.label}
      </option>
    ));
  };

  render() {
    return (
      <div className="general-preferences-wrapper">
        <div className="col-sm-3">
          <label htmlFor="language-select" className="p-r-1">
            Language
          </label>
          <select
            name="language-select"
            id="language-select"
            className="language-select"
            value={this.state.language}
            onChange={event => this.onChange(event)}
          >
            {this.renderLanguageOptions()}
          </select>
        </div>
      </div>
    );
  }
}
