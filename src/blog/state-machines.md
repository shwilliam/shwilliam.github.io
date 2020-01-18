---
title: Getting started with finite-state machines in React
titleShort: State machines
date: 2020-01-16
description: Simplify your UI logic with the finite-state machine pattern
layout: templates/blog-post.liquid
priority: 0.5
changefreq: 'monthly'
---

In web development, blog posts and library documentation too often use oversimplified examples to explain/illustrate UI patterns. When building out even the most simple form with a success message, one quickly realizes a `isLoading` boolean is probably not enough to describe the state.

To avoid a tangle of booleans and write more declarative and readable code, we can lean on the finite-state machine pattern. What it boils down to is:

- There is a finite set of states that we can exist in
- For each of these states, there is a set of events that allow us to transition into a new state

Let's have a look at an example in React of a button that fetches some async data using a helper hook `useMachine` to set up our reducer. The internals of this function aren't particularly important to this post as you could also choose to use a more popular and tested solution (like [X State](https://xstate.js.org/)), however I wanted to keep the examples as simple as possible. If you are interested in how it works or have ideas for improving the API, the project is open on [GitHub](https://github.com/shwilliam/react-use-machine).

```js
import React from 'react'
import useMachine from 'react-use-machine'

const LoadingButton = () => {
  const {state, event, dispatch} = useMachine(
    {
      IDLE: {
        DATA_REQUESTED: 'LOADING',
      },
      LOADING: {
        DATA_SUCCESS: 'SUCCESS',
        DATA_ERROR: 'ERROR',
      },
      SUCCESS: {
        DATA_REQUESTED: 'LOADING',
      },
      ERROR: {
        DATA_REQUESTED: 'LOADING',
      },
    },
    'IDLE',
  )

  useEffect(() => {
    switch (event) {
      case 'DATA_REQUESTED':
        fetch('https://swapi.co/api/people/1')
          .then(d => d.json())
          .then(d => {
            console.log('data: ', d)
            dispatch('DATA_SUCCESS')
          })
          .catch(e => {
            console.log('err: ', e)
            dispatch('DATA_ERROR')
          })
        break
      default:
        break
    }
  }, [event, dispatch])

  return (
    <button
      onClick={() => dispatch('DATA_REQUESTED')}
      disabled={state === 'LOADING'}
    >
      load data
    </button>
  )
}
```

When calling the `useMachine` hook to set up our state machine we are passing an object with the following shape:

```json
{
  <State>: {
    <Event>: <Next state>,
    ...
  },
  ...
}
```

It is therefore clear that in the example above, our button can be in only one of four states, `'IDLE'`, `'LOADING'`, `'SUCCESS'` or `'ERROR'`. With these deterministic states we can clearly describe our UI logic in a very declarative manner. For example disabling our button while loading is as simple as checking if our state value is equal to the string `'LOADING'`.

When we dispatch events the reducer first checks what state we are in, then performs any change to state if it is allowed. We can perform any logic or side effects based on events as they are dispatched in our `useEffect` switch statement, which in the example is fetching some data.

Hopefully this post illustrated how this pattern can be used to clean up some of your code and prevent what should be impossible states in your components by explicitly declaring the transitions that are allowed.

If you came across any issue or have a question regarding this post, feel free to submit it [here](https://github.com/shwilliam/shwilliam.github.io/issues).

## More on finite-state machines

[Formal Forms with State Machines (Talk)](https://www.youtube.com/watch?v=hiT4Q1ntvzg)

[Robust React User Interfaces with Finite State Machines](https://css-tricks.com/robust-react-user-interfaces-with-finite-state-machines/)
