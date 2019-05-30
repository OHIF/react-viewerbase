import './Icon.styl';

import PropTypes from 'prop-types';
import getIcon from './getIcon.js';

const Icon = props => {
  return getIcon(props.name, props);
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export { Icon };
