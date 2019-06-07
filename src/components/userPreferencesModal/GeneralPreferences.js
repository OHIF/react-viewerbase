import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GeneralPreferences.styl';
import i18n from 'ohif-i18n';

export class GeneralPreferences extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.generalData,
      // TODO: list of available languages should come from i18n provider
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

  static propTypes = {
    generalData: PropTypes.object.isRequired,
    onChange: PropTypes.func,
  };

  onChange(event) {
    const language = event.target.value;
    const data = { ...this.state.data, language };
    this.setState({ data });

    if (this.props.onChange) {
      this.props.onChange(data);
    }

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
            value={this.state.data.language}
            onChange={event => this.onChange(event)}
          >
            {this.renderLanguageOptions()}
          </select>
        </div>
      </div>
    );
  }
}
