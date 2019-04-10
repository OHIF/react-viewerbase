# react-viewerbase

> A set of React components for Medical Imaging Viewers.

*Status: Under development*

[![NPM](https://img.shields.io/npm/v/react-viewerbase.svg)](https://www.npmjs.com/package/react-viewerbase)

## Install

```bash
npm install --save react-viewerbase
```

## Usage

```jsx
import React, { Component } from 'react'

import CornerstoneViewport from 'react-viewerbase'

class Example extends Component {
  render () {
    return (
      <CornerstoneViewport />
    )
  }
}
```

- Elements
  - Global
    - Animations
    - Color
  - Buttons
  - Feedback
  - Form Elements
  - Images
  - Typography
- Components
  - Form
    - Field
    - Search
  - Blocks
  - Layout
  - Media
  - Messaging (alert/overlay)
- Structures
  - Footer
  - Header
  - Stacked Form
  - Media List
- Templates
  - Dashboard
  - Homepage
  - Form
- Pages

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
