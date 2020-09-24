![YouSee DNA React logo](logo.svg)

[![Build Status](https://travis-ci.org/youseedk/dna-react.svg?branch=master)](https://travis-ci.org/youseedk/dna-react) [![codecov](https://codecov.io/gh/havgry/ys-react/branch/master/graph/badge.svg)](https://codecov.io/gh/havgry/ys-react) [![npm version](https://badge.fury.io/js/%40youseedk%2Fdna-react.svg)](https://badge.fury.io/js/%40youseedk%2Fdna-react)

**This repository is deprecated. You should go to [Nuuday DNA React](https://github.com/nuuday/dna-react/) instead. This repository was the initial effort of combining React with YouSee DNA in an intuitive and effortless way.**

React component library implementing [YouSee DNA](https://github.com/youseedk/dna). It's merely a React implementation of YouSee DNA meaning that bugs regarding styling/markup, feature requests for new components or component variants should be directed towards [YouSee DNA](https://github.com/youseedk/dna/issues).

## Installation and use

```
$ yarn add @youseedk/dna-react
```

```
$ npm i @youseedk/dna-react
```

### Example

```
import React from 'react'
import { Button } from '@youseedk/dna-react'

// CSS is imported separately
import '@youseedk/dna/css/icons/ys-icons.css'
import '@youseedk/dna/css/elements/ys-button.css'

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

Please note that `react`, `react-dom`, and `react-router-dom` are required peer dependencies.

## Documentation
[DNA React documentation (Storybook)](https://youseedk.github.io/dna-react/)

[DNA documentation](https://dna.yousee.dk/)
