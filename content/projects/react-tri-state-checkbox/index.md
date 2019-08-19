---
path: /project/react-tri-state-checkbox
title: ☑ Tri-State Checkbox
category: os
tech: react
link: https://codesandbox.io/s/react-tri-state-checkbox-demo-8j7mo?fontsize=14
source: https://github.com/shwilliam/react-tri-state-checkbox
date: 2019-08-10T00:00:00-05:00
excerpt: A mixed-state checkbox based on the WAI-ARIA Authoring Practices's tri-state checkbox
featured: os
---

A mixed-state checkbox for React based on the WAI-ARIA Authoring Practices's [tri-state checkbox](https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox).
For more details see [this specification](https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox).

## Installation

```shell
$ npm i react-tri-state-checkbox
```

## Usage

### `<TriStateCheckbox />`

The mixed-state checkbox component.

#### Props

| Name   | Type     | Required | Description                                                                                                                                                   |
| ------ | -------- | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| render | Function |    ❌    | A function used to render the mixed-state checkbox. The current state is passed as the prop `aria-checked`, which can be either `true`, `false` or `'mixed'`. |

Please note that if you are **not** rendering your own checkbox for this component, you probably want to import the default styles for the mixed-state checkbox by importing the following stylesheet:

```js
import 'react-tri-state-checkbox/dist/styles.css'
```

### `<Checkbox />`

A checkbox associated with the `<TriStateCheckbox />`.

#### Props

| Name    | Type     | Required | Description                                                                                        |
| ------- | -------- | :------: | -------------------------------------------------------------------------------------------------- |
| id      | string   |    ✅    | A unique `id`. Also passed to `<TriStateContext />` in `controls` array.                           |
| checked | boolean  |    ❌    | The state of the checkbox.                                                                         |
| render  | Function |    ❌    | A function used to render the checkbox. The current state is passed as the boolean prop `checked`. |

### `<TriStateContext />`

A context wrapper that handles checkbox state changes. Must wrap `<TriStateCheckbox />` and `<Checkbox />`.

#### Props

| Name     | Type  | Required | Description                          |
| -------- | ----- | :------: | ------------------------------------ |
| controls | Array |    ✅    | An array of controlled checkbox ids. |

[![Try it on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-tri-state-checkbox-demo-8j7mo?fontsize=14)
