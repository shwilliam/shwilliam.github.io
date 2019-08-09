---
path: /project/lagom-css
title: 👒 Lagom CSS
description: Functional, utility-first CSS library
category: os
link: https://shwilliam.github.io/lagom-css/
source: https://github.com/shwilliam/lagom-css/
date: 2019-05-22T00:00:00-05:00
excerpt: Functional, utility-first CSS library
---

## About

Lagom is a CSS library that focuses on quick & straightforward class-based, utility-first styling. Inspired by projects such as [Tachyons](https://github.com/tachyons-css/tachyons) & [Wing](https://github.com/kbrsh/wing), which take similar approaches, Lagom uses class names & size increments that make sense and allow users to intuitively style their site/app without constantly referring to the CSS library's docs.

You can find an overview of the available styles in use [here](https://shwilliam.github.io/lagom-css/).

## Getting started

The easiest way to use this library is probably to drop the following link tag in the head of your HTML file:

```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/lagom-css" />
```

If you are using a bundler, such as webpack, you can install the package from npm by running `npm i lagom-css` and import it in JavaScript (`import 'lagom-css'`).

## Unused CSS

Due to their nature, utility CSS libraries can be quite large. If performance or file-size matters to you (or you're using this production), I would recommend using a tool such as [PurifyCSS](https://github.com/purifycss/purifycss) to remove unused CSS. Doing this, the CSS file that you would want to target is `/dist/lagom.min.css` in this package (download it [here](https://raw.githubusercontent.com/shwilliam/lagom-css/master/dist/lagom.min.css)).
