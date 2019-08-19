---
path: /project/vue-window-dimensions
title: ↔ vue-window-dimensions
category: os
tech: vue
source: https://github.com/shwilliam/vue-window-dimensions
date: 2019-05-01T00:00:00-05:00
excerpt: Declaratively use browser window dimensions in VueJS
---

`vue-window-dimensions` is a Vue component that exposes the width and height of your browser window.

Please note that there are other libraries that try to solve this same problem. These, however, use a different API and often expose the dimensions as a global variable that updates on window resize. If this is more to your liking, check out [`vue-window-size`](https://github.com/mya-ake/vue-window-size) or [`vue-screen-size`](https://github.com/promosis/vue-screen-size).

## Installation

Install the component from npm by running `npm i vue-window-dimensions` or `yarn add vue-window-dimensions`.

## Usage

Import, register and place the component in your Vue app.

```html
<template>
  <VueWindowDimensions>
    <template slot-scope="{ dimensions }">
      dimensions: {{ dimensions.width }}, {{ dimensions.height }}
    </template>
  </VueWindowDimensions>
</template>
```

```js
import VueWindowDimensions from 'vue-window-dimensions'

export default {
  components: {
    VueWindowDimensions,
  },
}
```

[![Try it out on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/ryl19r628q?fontsize=14)
