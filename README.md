<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<div align="center">
  <h1>react-viewerbase</h1>

  <p><strong>React Viewerbase is a collection of components and utilities</strong> that power OHIF's <a href="https://github.com/OHIF/Viewers">zero-footprint DICOM viewer</a>.</p>
</div>

<div align="center">
<a href="https://react.ohif.org/"><strong>Read The Docs</strong></a> |
<a href="https://react.ohif.org/contributing">Edit the docs</a>

</div>

<hr />

[![CircleCI][circleci-image]][circleci-url]
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors)
[![code style: prettier][prettier-image]][prettier-url]
[![semantic-release][semantic-image]][semantic-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

This set of "Medical Imaging Viewer" React components are maintained separately
to:

- Decouple presentation from business logic
- Test and develop components in isolation
- Provide well documented, reusable components
- Aid rapid application development for context specific viewers

## Install

> This component library is pre- v1.0. All realeases until a v1.0 have the
> possibility of introducing breaking changes. Please depend on an "exact"
> version in your projects to prevent issues caused by loose versioning.

For full installation instructions, be sure to check out our
[getting started](https://react.ohif.org/getting-started#installation) guide.

```bash
// with npm
npm i react-viewerbase --save-exact

// with yarn
yarn add react-viewerbase --exact
```

## Usage

```jsx
import React, { Component } from 'react';
import { LayoutButton } from 'react-viewerbase';

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCell: {
        className: 'hover',
        col: 1,
        row: 1,
      },
    };
  }

  render() {
    return (
      <LayoutButton
        selectedCell={this.state.selectedCell}
        onChange={cell => this.setState({ selectedCell: cell })}
      />
    );
  }
}
```

## Running Locally

_Restore dependencies after cloning:_

1. `cd react-viewerbase`
2. `yarn install`

_Develop w/ Hot Reloading:_

`yarn dev`

_Build for Production:_

`yarn build`

## Contributors ✨

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/swederik"><img src="https://avatars3.githubusercontent.com/u/607793?v=4" width="100px;" alt="Erik Ziegler"/><br /><sub><b>Erik Ziegler</b></sub></a><br /><a href="https://github.com/OHIF/react-viewerbase/commits?author=swederik" title="Code">💻</a> <a href="#maintenance-swederik" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://dannyrb.com/"><img src="https://avatars1.githubusercontent.com/u/5797588?v=4" width="100px;" alt="Danny Brown"/><br /><sub><b>Danny Brown</b></sub></a><br /><a href="https://github.com/OHIF/react-viewerbase/commits?author=dannyrb" title="Code">💻</a> <a href="#maintenance-dannyrb" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/galelis"><img src="https://avatars3.githubusercontent.com/u/2378326?v=4" width="100px;" alt="Gustavo André Lelis"/><br /><sub><b>Gustavo André Lelis</b></sub></a><br /><a href="https://github.com/OHIF/react-viewerbase/commits?author=galelis" title="Code">💻</a> <a href="#maintenance-galelis" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/maltempi"><img src="https://avatars3.githubusercontent.com/u/7017182?v=4" width="100px;" alt="Thiago Maltempi"/><br /><sub><b>Thiago Maltempi</b></sub></a><br /><a href="https://github.com/OHIF/react-viewerbase/commits?author=maltempi" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/siliconvalleynextgeneration/"><img src="https://avatars0.githubusercontent.com/u/1230575?v=4" width="100px;" alt="Esref Durna"/><br /><sub><b>Esref Durna</b></sub></a><br /><a href="https://github.com/OHIF/react-viewerbase/commits?author=EsrefDurna" title="Code">💻</a></td>
    <td align="center"><a href="http://www.isomics.com"><img src="https://avatars0.githubusercontent.com/u/126077?v=4" width="100px;" alt="Steve Pieper"/><br /><sub><b>Steve Pieper</b></sub></a><br /><a href="https://github.com/OHIF/react-viewerbase/commits?author=pieper" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue]
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests-feature]

### ❓ Questions

For questions related to using the library, please visit our support community,
or file an issue on GitHub.

[Google Group][google-group]

## License

MIT © [OHIF](https://github.com/OHIF)

<!--
Links:
-->

<!-- prettier-ignore-start -->
[all-contributors-image]: https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square
[contributing-url]: https://github.com/OHIF/react-viewerbase/blob/master/CONTRIBUTING.md
[circleci-image]: https://circleci.com/gh/OHIF/react-viewerbase.svg?style=svg
[circleci-url]: https://circleci.com/gh/OHIF/react-viewerbase
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
[npm-url]: https://npmjs.org/package/react-viewerbase
[npm-downloads-image]: https://img.shields.io/npm/dm/react-viewerbase.svg?style=flat-square
[npm-version-image]: https://img.shields.io/npm/v/react-viewerbase.svg?style=flat-square
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
<!-- -->
[bugs]: https://github.com/OHIF/react-viewerbase/labels/bug
[requests-feature]: https://github.com/OHIF/react-viewerbase/labels/enhancement
[good-first-issue]: https://github.com/OHIF/react-viewerbase/labels/good%20first%20issue
[google-group]: https://groups.google.com/forum/#!forum/cornerstone-platform
<!-- prettier-ignore-end -->
