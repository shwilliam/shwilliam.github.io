---
path: /project/vue-essential-transitions
title: 🍃 vue-essential-transitions
category: os
tech: vue
source: https://github.com/shwilliam/vue-essential-transitions
date: 2019-02-10T00:00:00-05:00
imgUrl: https://user-images.githubusercontent.com/38357771/54794660-f08ccd00-4c1e-11e9-86f7-195b16c810e9.gif
imgAlt: Transition examples
excerpt: Collection of Vue transition styles for quick prototyping
---

Vue provides a handy `transition` wrapper component that makes styling enter/leave transitions an ease. When starting a new app or quickly sketching a demo, writing styles can slow and repetitive. This project tries to alleviate some of this by providing a small collection of common, transition styles intended to be used with Vue's native `transition` component.

## Transitions

| Transition name   | Description                                |
| ----------------- | ------------------------------------------ |
| v-fade            | Transition opacity                         |
| v-grow            | Scale into view                            |
| v-slide           | Slide in from right of window              |
| v-slide-left      | Slide in from left of window               |
| v-slide-down      | Slide in from top of window                |
| v-slide-up        | Slide in from bottom of window             |
| v-slide-fade      | Slide in from right and transition opacity |
| v-slide-fade-left | Slide in from left and transition opacity  |
| v-slide-fade-down | Slide down and transition opacity          |
| v-slide-fade-up   | Slide up and transition opacity            |

## Installation

Install the package from npm by running

```
$ npm install --save vue-essential-transitions
```

or

```
$ yarn add vue-essential-transitions
```

## Usage

Simply import the minified CSS file and reference a [transition name](##Transitions) in the name attrubute of a <transition> element, for example, '<transition name="v-fade"><FadingEl /></transition>.

```
<template>
    <transition name="v-fade">
      [...]
    </transition>
</template>

<script>
import "vue-essential-transitions";

[...]
</script>
```

[![vue-essential-transitions example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/rl27rwmxjo)
