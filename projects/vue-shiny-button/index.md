---
path: /project/vue-shiny-button
title: 🤳 vue-shiny-button
description: A button so shiny you can see your own reflection
category: os
source: https://github.com/shwilliam/vue-shiny-button
date: 2019-03-11t00:00:00-05:00
imgurl: https://user-images.githubusercontent.com/38357771/54468459-13246f00-4763-11e9-8f46-f9fe0abda720.gif
imgalt: component example
excerpt: A super shiny & incredibly useful Vue button component
---

[`vue-shiny-button`](https://github.com/shwilliam/vue-shiny-button) is a super shiny and incredibly unuseful Vue button component.

## Installation

Install the package from npm by running `npm i vue-shiny-button` or `yarn add vue-shiny-button`.

## Usage

Import and register the component to use it in your app's templates.

```html
<template>
  <VueShinyButton @click="..." />
</template>
```

```js
import VueShinyButton from 'vue-shiny-button'

export default {
  components: {
    VueShinyButton,
  },
}
```

## Accessibility

Apply attributes, such as aria-labels, directly on the element to apply them to the button.

```html
<template>
  <VueShinyButton aria-label="Send message" />
</template>
```

[![Try it on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/ol9q8jyw4q?fontsize=14)
