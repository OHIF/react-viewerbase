<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<div align="center">
  <h1>react-viewerbase</h1>

  <p><strong>React Viewerbase is a collection of components and utilities</strong> that power OHIF's <a href="https://github.com/OHIF/Viewers">zero-footprint DICOM viewer</a>. We maintain them as a separate component library to:</p>
</div>

<ul>
  <li>Decouple presentation from business logic</li>
  <li>Test and develop components in isolation</li>
  <li>Provide well documented, reusable components</li>
  <li>Aid rapid application development for context specific viewers</li>
</ul>

<div align="center">
<a href="https://react.ohif.org/"><strong>Read The Docs</strong></a> |
<a href="https://react.ohif.org/contributing">Edit the docs</a>

</div>

<hr />

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

[![All Contributors][all-contributors-image]][contributing-url]
[![code style: prettier][prettier-image]][prettier-url]
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

> A set of React components for Medical Imaging Viewers.

## Install

```bash
npm install --save react-viewerbase
```

## Usage

```jsx
import React, { Component } from 'react'

import CornerstoneViewport from 'react-viewerbase'

class Example extends Component {
  render() {
    return <CornerstoneViewport />
  }
}
```

## To run locally

Clone this repository and build the library

1. `cd react-viewerbase`
2. `yarn install`
3. `yarn start`

Open a new terminal (or tab) and build the example application.

1. `cd example`
2. `yarn install`
3. `yarn start`

## License

MIT © [OHIF](https://github.com/OHIF)

<!--
Links:
-->

<!-- prettier-ignore-start -->
[all-contributors-image]: https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square
[contributing-url]: https://github.com/OHIF/react-viewerbase/blob/master/CONTRIBUTING.md
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
[npm-url]: https://npmjs.org/package/react-viewerbase
[npm-downloads-image]: https://img.shields.io/npm/dm/react-viewerbase.svg?style=flat-square
[npm-version-image]: https://img.shields.io/npm/v/react-viewerbase.svg?style=flat-square
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE
<!-- prettier-ignore-end -->
