---
path: /project/vue-visibility-trigger
title: 👁 vue-visibility-trigger
description: Vue component that triggers an event when scrolled into view
category: os
source: https://github.com/shwilliam/vue-visibility-trigger
date: 2018-10-14T00:00:00-05:00
excerpt: Declarative Vue component that emits an event when scrolled into view
featured: os
---

[`vue-visibility-trigger`](https://github.com/shwilliam/vue-visibility-trigger) is a component that helps you declaratively react a position in the DOM being scrolled into view. Simply place the component in the appropriate place and specify a function to run when the component becomes 'visible' (with `@scrolledIn`).

## Installation

Install the package from npm by running

```
$ yarn add vue-visibility-trigger
```

or

```
$ npm i vue-visibility-trigger
```

## Usage

Import, register and place the component in your Vue app. Attach a function to react to the 'scrolledIn' event with 'v-on:scrolledIn="..."' or '@scrolledIn="..."'.

```
<template>
  ...
    <VueVisibilityTrigger @scrolledIn="doSomething" />
  ...
</template>

<script>
import VueVisibilityTrigger from 'vue-visibility-trigger'

export default {
  ...
  components: {
    VueVisibilityTrigger
  }
};
</script>
```

[![vue-visibility-trigger demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/qkyolorn6w?module=%2Fsrc%2FApp.vue)
