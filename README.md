# dna-react
[![Build Status](https://travis-ci.com/havgry/ys-react.svg?branch=master)](https://travis-ci.com/havgry/ys-react) [![codecov](https://codecov.io/gh/havgry/ys-react/branch/master/graph/badge.svg)](https://codecov.io/gh/havgry/ys-react) [![npm version](https://badge.fury.io/js/ys-react.svg)](//npmjs.com/package/ys-react)

React component library implementing [YouSee DNA](https://github.com/youseedk/dna). At this point in time, consider it a proof of concept of a component-based implementation distributed with npm (no Sitecore dependencies whatsoever) and documented in Storybook.

## Installation and use

`yarn add ys-react` or `npm i ys-react`. Currently only a button component is available and can be used like so:

```
import React from 'react'
import { Button } from 'ys-react'

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

### Peer dependencies

Please note that both `react` and `react-dom` are required peer dependencies.

## Documentation
[For now, Storybook is all you get](https://youseedk.github.io/dna-react/)
