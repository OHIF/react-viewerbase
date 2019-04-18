import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import pkg from './package.json'
// Deal with https://github.com/rollup/rollup-plugin-commonjs/issues/297
import builtins from 'rollup-plugin-node-builtins'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
}

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'react-viewerbase',
      sourcemap: true,
      exports: 'named',
      globals,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      globals,
    },
  ],
  plugins: [
    builtins(),
    external(),
    postcss({
      modules: false,
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['@babel/external-helpers'],
      externalHelpers: true,
      runtimeHelpers: true,
    }),
    resolve({
      browser: true,
    }),
    commonjs({
      // https://github.com/airbnb/react-dates/issues/1183#issuecomment-392073823
      namedExports: {
        'node_modules/react-dates/index.js': [
          'DateRangePicker',
          'isInclusivelyBeforeDay',
        ],
      },
    }),
  ],
}
