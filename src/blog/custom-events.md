---
title: Custom Events in JavaScript
date: 2019-10-28
description: A brief introduction to custom events in JavaScript
priority: 0.5
changefreq: 'monthly'
---

## 📡 Custom events in JavaScript

---

![TIL Javascript supports custom events](/images/custom-events-tweet.png)

How did I miss this? No clue. Since I discovered this feature I have been playing around with its possibilities; most of all I love how easy it is to grasp and how effortlessly it allows us to clean up our often event-based code.

Not only are you limited to using events fired by the browser, such as `'click'`, `'submit'`, `'scroll'`, but you can use the native `CustomEvent` constructor to create your own events.

### Example

Let's see this in action by refactoring a simple callback-based example to utilize custom events. This example has two main components, a chat and a notification area that displays some information about the latest chat message.

```js
import Chat from './chat'
import ChatForm from './chat-form'
import Notifications from './notifications'
;(() => {
  const chat = Chat('chat')
  const notifications = Notifications('notifications')

  const chatForm = ChatForm('chat-form', message => {
    chat.append(message)
    notifications.notify(message)
  })
})()
```

```js
const ChatForm = (id, cb) => {
  const el = document.getElementById(id)
  const messageInput = el.querySelector('input')

  el.addEventListener('submit', e => {
    e.preventDefault()
    cb(messageInput.value)
    messageInput.value = ''
  })

  return el
}

export default ChatForm
```

Currently, we must pass a callback into the initialization of our chat in order that renders the new chat message and notification. This works great but let's see if we can create a more flexible API for our chat that allows us to listen to new messages.

First, let's create a new `CustomEvent` and emit new chat messages in the submit event handler of our chat form.

```js
const ChatForm = id => {
  const el = document.getElementById(id)
  const messageInput = el.querySelector('input')

  const newMessageEvent = new CustomEvent('new-message', {
    detail: {text: () => messageInput.value},
  })

  el.addEventListener('submit', e => {
    e.preventDefault()
    el.dispatchEvent(newMessageEvent)
    messageInput.value = ''
  })

  return el
}

export default ChatForm
```

Now, we can add an event listener to our chat element that listens for `'new-message'` events and reacts calls the appropriate methods on the `chat` and `notifications` instances.

```js
import Chat from './chat'
import ChatForm from './chat-form'
import Notifications from './notifications'
;(() => {
  const chat = Chat('chat')
  const chatForm = ChatForm('chat-form')
  const notifications = Notifications('notifications')

  chatForm.addEventListener('new-message', e => {
    const message = e.detail.text()

    chat.append(message)
    notifications.notify(message)
  })
})()
```

Due to the event-driven nature of a majority of our frontend programming, this native feature is very easy to get used to and use to clean up certain parts of our codebase in particular situations.

### Browser support

The `CustomEvent` constructor is available in all major browsers with the only exception being Internet Explorer. Nonetheless, [this](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill) simple polyfill is available if you need it.

The code for a working example containing the final example above can be found [here](https://github.com/shwilliam/custom-events-example). If you came across any issue or have a question regarding this post, feel free to submit it [here](https://github.com/shwilliam/shwilliam.github.io/issues).
