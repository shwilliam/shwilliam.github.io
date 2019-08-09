---
path: /project/vue-loading-button
title: 👇 vue-loading-button
description: Vue button with a slideout loading indicator
category: os
source: https://github.com/shwilliam/vue-loading-button
date: 2019-02-04t00:00:00-05:00
imgurl: https://user-images.githubusercontent.com/38357771/52435345-9fe26a00-2adf-11e9-832e-497ffa480d05.gif
imgalt: component example
excerpt: Vue button with a slideout loading indicator
---

Vue button with a slideout loading indicator

## Installation

Install the package from npm by running:

```
$ npm i vue-loading-button
```

or

```
$ yarn add vue-loading-button
```

## Usage

Import, register and place the component in your Vue app.

```html
<template>
  <VueLoadingButton />
</template>
```

```js
import VueLoadingButton from 'vue-loading-button'

export default {
  components: {
    VueLoadingButton,
  },
}
```

## Props

| Prop    | Type    | Required | Default | Description                          |
| ------- | ------- | -------- | ------- | ------------------------------------ |
| loading | boolean | false    | false   | Controls loading indicator animation |
| styled  | boolean | false    | false   | Enables opinionated sample styles    |

## Accessibility

Apply attributes, such as aria-label, directly on the element to apply them to the button.

```html
<template>
  <VueLoadingButton aria-label="Send message" />
</template>
```

[![try it on codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/4zywwyjxw7)
