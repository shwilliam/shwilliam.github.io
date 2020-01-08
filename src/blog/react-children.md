---
path: /blog/react-children
date: 2019-10-29
title: A gentle introduction to React component composition
description: Learn to use `props.children` to create reusable components in React
layout: templates/scrollable.liquid
priority: 0.5
changefreq: 'monthly'
---

## 👶 A gentle introduction to React component composition

---

Building front-end components using React provides developers with a great deal of flexibility in designing APIs that are highly reusable by exposing just the right amount of control to the user.

Learning React, it's easy to get into the habit of building components as "black boxes" and utilizing `props` as **the** way to pass data through your app. In this post I will explain an easy way to utilize `props.children` to make your components more reusable and avoid smells like "prop-drilling" and code duplication.

Below is some code from a simple React app that uses a `NameTag` component to render some text with a colored background.

```js
// components/NameTag.js

import React from 'react'

const NameTag = ({name, bg}) => (
  <div style={{backgroundColor: bg}}>
    <p>My name is: {name}</p>
  </div>
)

export default NameTag
```

Note: If this syntax looks confusing to you I recommend checking out [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) page of the MDN web docs that explains destructuring assignment introduced and [this](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/) article about arrow functions, both introduced in ES6.

```js
// App.js

import React from 'react'
import NameTag from './components/NameTag'

const App = () => (
  <div>
    <NameTag name="William" bg="yellow" />
    <NameTag name="Greg" bg="pink" />
  </div>
)

export default App
```

Nice! Our `<NameTag>` is reusable and neatly hides its slightly messier details of its implementation. Our app component looks super clean and easy to read. However, let's say wanted to add a title to this app with a similar colored background as our `<NameTag>`. Let's create a new `Title` component and render it in our app.

```js
// components/Title.js

import React from 'react'

const Title = ({title, bg}) => (
  <div style={{backgroundColor: bg}}>
    <h1>{title}</h1>
  </div>
)

export default Title
```

```js
// App.js

import React from 'react'
import NameTag from './components/NameTag'
import Title from './components/Title'

const App = () => (
  <div>
    <Title title="My app" bg="lightblue" />
    <NameTag name="William" bg="yellow" />
    <NameTag name="Greg" bg="pink" />
  </div>
)

export default App
```

It doesn't take long for us to spot some smells with our code at this point. Some of our code is now duplicated. What if there happened to be a bug in the way the background color had been implemented? The issue would have to be hunted down and fixed in various parts of the code. Let's see if we can refactor this app to make some more reusable components.

### `props.children`

When you use your React component in JSX, any elements inside the component's opening and closing tags is passed to that component as `props.children`. This allows a component to utilize and manipulate the content that is rendered based on what is passed.

In our case, we simply want a component that wrap whatever we pass inside its tags with a container that has a colored background.

```js
// components/Background.js

import React from 'react'

const Background = ({color, children}) => (
  <div style={{backgroundColor: color}}>{children}</div>
)

export default Background
```

```js
// App.js

import React from 'react'
import NameTag from './components/NameTag'
import Background from './components/Background'

const App = () => (
  <div>
    <Background color="blue">
      <h1>My App</h1>
    </Background>

    <Background color="yellow">
      <NameTag name="William" />
    </Background>

    <Background color="pink">
      <NameTag name="Greg" />
    </Background>
  </div>
)

export default App
```

```js
// components/NameTag.js

import React from 'react'

const NameTag = ({name}) => <p>My name is: {name}</p>

export default NameTag
```

### "Prop-drilling"

Using `children` we can also avoid "prop-drilling" which is another code-smell that tends to show up when getting started with React. "Prop-drilling" is the act of passing data through several components with `props`, when these components don't actually have anything to do with the piece of data their passing along.

For example, in our earlier version of our app, `<NameTag>` was being passed `bg` as a prop while this not what the component was designed for; This prop was solely introduced to handle a particular use case. This often occurs when multiple components depend on the same piece of data, often leading to brittle code that is a pain to refactor.

Through utilizing what we've learned about `children`, we can now simplify our code by making our components more reusable and provide a more flexible API to handle a larger variety of use-cases.

If you came across any issue or have a question regarding this post, feel free to submit it [here](https://github.com/shwilliam/shwilliam.github.io/issues).

### Further reading

If you want to learn more about this idea, the React docs mention it [here](https://reactjs.org/docs/composition-vs-inheritance.html) and [here](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx). Building on these concepts is [this](https://www.youtube.com/watch?v=hEGg-3pIHlE) great talk by Ryan Florence's from PhoenixJS a few years ago that I highly recommend. It explains a strategy of implementing "compound components" in React that implicitly share state between one another.
