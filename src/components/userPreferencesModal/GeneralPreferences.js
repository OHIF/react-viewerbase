import React, { Component } from 'react';
import './GeneralPreferences.styl';
import PropTypes from 'prop-types';

export class GeneralPreferences extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    generalData: PropTypes.object.isRequired,
  };

  onChange(event) {
    const { value: language } = event.target;
    this.setState({
      currentLanguage: language,
    });

    this.props.generalData.onChange(language);
  }

  renderLanguageOptions = (val, label) => {
    const { languages } = this.props.generalData;
    return languages.map(language => (
      <option key={language.value} value={language.value}>
        {language.label}
      </option>
    ));
  };

  render() {
    const { currentLanguage } = this.props.generalData;

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
            value={currentLanguage}
            onChange={event => this.onChange(event)}
          >
            {this.renderLanguageOptions()}
          </select>
        </div>
      </div>
    );
  }
}
