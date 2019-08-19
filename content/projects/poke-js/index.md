---
path: /project/poke-js
title: 👉 poke-js
category: os
tech: vanilla
source: https://github.com/shwilliam/poke-js
date: 2019-04-24T00:00:00-05:00
excerpt: A small reactivity system
featured: os
---

[`poke-js`](https://github.com/shwilliam/poke-js) is a tiny reactivity system that leverages straightforward HTML data attributes to update DOM elements on changes to a particular value, or easily use them as inputs to update the data on change.

## Usage

Import `poke-js` by including the following script tag in your HTML:

```html
<script src="https://unpkg.com/poke-js"></script>
```

The global variable `Poke` is now available with the `init` & `watch` methods. Use these to initialize your data object and add 'watcher' functions to be run whenever any of their data dependencies are updated.

```js
const {init, watch} = Poke

let data = {price: 5, quantity: 2}
init(data)

// total output
const totalOutput = document.getElementById('totalOutput')
watch(() => (totalOutput.innerText = data.price * data.quantity))
```

In this example, any changes to the `price` or `quantity` properties of `data`, will update the DOM element with the id `totalOutput`.

The properties of the data passed to `Poke.init()` are also easily bound to the `value` & `innerText` of DOM elements by using the `data-bind` attribute.

```html
Price: <span data-bind="price"></span>
```

Furthermore, `poke-js` will listen to input events on any element with the `data-input` attribute and reflect the change in the corresponding data value.

```html
<input data-input="quantity" type="number" />
```

To see an example of all of this working together, check out [this CodeSandbox](https://codesandbox.io/s/94l470xr3w?autoresize=1&fontsize=12&hidenavigation=1).
