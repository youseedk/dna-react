![YouSee DNA React logo](logo.svg)

[![Build Status](https://travis-ci.com/havgry/ys-react.svg?branch=master)](https://travis-ci.com/havgry/ys-react) [![codecov](https://codecov.io/gh/havgry/ys-react/branch/master/graph/badge.svg)](https://codecov.io/gh/havgry/ys-react) [![npm version](https://badge.fury.io/js/ys-react.svg)](//npmjs.com/package/ys-react)

React component library implementing [YouSee DNA](https://github.com/youseedk/dna). It's merely a React implementation of YouSee DNA meaning that bugs regarding styling/markup, feature requests for new components or component variants should be directed towards [YouSee DNA](https://github.com/youseedk/dna/issues).

## Installation and use

```
yarn add @youseedk/dna-react
```

```
npm i @youseedk/dna-react
```

### Example

```
import React from 'react'
import { Button } from '@youseedk/dna-react'

const MyComponent = () => (
  <div>
    My component is good and does all the things
    <Button
      label="Scratch me, please"
      onClick={() => { alert('Thank you!') }}
      variant="cta" />
  </div>
)

export default MyComponent
```
All components and icons can be imported as ES6 and CommonJS modules.

### Peer dependencies

Please note that both `react` and `react-dom` are required peer dependencies.

## Documentation
[For now, Storybook is all you get](https://youseedk.github.io/dna-react/)
