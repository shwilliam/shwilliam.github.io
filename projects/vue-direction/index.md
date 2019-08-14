---
path: /project/vue-direction
title: 👋 vue-direction
category: os
tech: vue
source: https://github.com/shwilliam/vue-direction
date: 2019-03-10T00:00:00-05:00
imgUrl: https://user-images.githubusercontent.com/38357771/53678998-b326c680-3c94-11e9-8e4f-f65feee8651f.gif
imgAlt: Component example
excerpt: Declarative, direction-aware hover in VueJS
featured: os
---

[`vue-direction`](https://github.com/shwilliam/vue-direction) is a component that allows you to easily use users' mouse movement direction in your app. It utilizes Vue's [scoped-slots](https://vuejs.org/v2/guide/components-slots.html) syntax to expose x- and y-axis mouse direction that can be passed to the components that require them.

## Installation

Install the component via npm by running `npm i vue-direction` or `yarn add vue-direction`.

## Usage

Import, register and place the component in your Vue app.

```html
<template>
  <VueDirection>
    <template slot-scope="{ mouseDirection }">
      <!-- do something with 'mouseDirection' -->
      {{ mouseDirection.x }}
      {{ mouseDirection.y }}
    </template>
  <VueDirection/>
</template>
```

```js
import VueDirection from 'vue-direction'

export default {
  components: {
    VueDirection,
  },
}
```

[![Try it on codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/3x46lrlk1q)
