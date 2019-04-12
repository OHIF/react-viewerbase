/**
 * Docz Configuration File:
 * https://www.docz.site/docs/project-configuration
 */

import { css } from 'docz-plugin-css'

export default {
  dest: 'example/build',
  public: '/public',
  indexHtml: 'src/__docs__/index.html',
  // Limited support for importing `.styl` files
  codeSandbox: false,
  menu: [
    'Introduction',
    'Getting Started',
    { name: 'Elements', menu: ['Form / Select'] },
    {
      name: 'Components',
      menu: [
        'CINE Dialog',
        'Layout Button',
        'Measurement Table',
        'Overlay Trigger',
        'Quick Switch',
        'Rounded Button Group',
        'Select Tree',
        'Simple Dialog',
        'Study Browser',
        'Study List',
        'Table List',
        'Toolbar Section',
        'User Preferences Modal',
      ],
    },
    'Styling & Theming',
    'Compatibility',
  ],
  // Rollup Aliases?
  // https://github.com/pedronauck/docz/issues/373
  plugins: [
    css(),
    css({
      preprocessor: 'stylus',
      cssmodules: false,
    }),
  ],
}

/*
 * Alternative ways to extend/modify underlying webpack config
 *
modifyBundlerConfig: (config) => {
  config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    })

  return config
}
  *
  *
  *
onCreateWebpackChain: config => {
  config.module
    .rule('css')
      .test(/\.css$/)
        .use('css-loader')
        .loader('css-loader')
        .options({ sourceMap: false,
                    importLoaders: 2 })
}
*/
