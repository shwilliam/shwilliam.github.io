---
path: /project/vue-scrollin
title: 🎰 vue-scrollin
description: Scroll-in text component for VueJS
category: os
source: https://github.com/shwilliam/vue-scrollin
date: 2018-05-29t00:00:00-05:00
imgurl: https://user-images.githubusercontent.com/38357771/54847524-efa67a80-4cb4-11e9-8d4c-1b830f03bedd.gif
imgalt: component example
excerpt: Scroll-in text component for VueJS
---

Scroll-in text component for VueJS.

## Install

Install the package from npm with your favorite package manager (eg. `yarn add vue-scrollin` or `npm i vue-scrollin`).

## Usage

Simply import and register the component and use it in your template. For example,

```
<template>
  <VScrollin>
    this text will scroll
  </VScrollin>
</template>

<script>
import VScrollin from 'vue-scrollin'

export default {
  [...]
  components: {
    VScrollin
  }
};
</script>
```

## Props

Easily customise the animation with optional props.

| Property name |         Type | Default | Description                             |
| ------------- | -----------: | :-----: | --------------------------------------- |
| characters    | String/Array |   a-z   | Characters scrolled through             |
| misses        |       Number |    4    | Number of scrolls before correct letter |
| speed         |       Number |   80    | Delay of each letter scoll (ms)         |

[![Try it on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/5v1wlj1z0p?module=%2Fsrc%2FApp.vue)
