import { css } from 'docz-plugin-css';

export default {
  menu: ['Getting Started'],
  plugins: [
    css({
      preprocessor: 'stylus',
      cssmodules: true,
    }),
  ],
}