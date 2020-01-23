---
title: Implementing a simple and accessible dark mode
titleShort: Dark mode
date: 2020-01-22
description: Implement a dark mode with CSS-variables and `prefers-color-scheme`
layout: templates/blog-post.liquid
priority: 0.5
changefreq: 'monthly'
---

More and more users are choosing to use 'dark mode' settings on both mobile and desktop devices to view content and interact with their favorite applications. Not only is this increasingly popular feature a nice way to add some user personalization, it is also an accessibility concern as enabling a dark theme can greatly improve readability in low light (if it is implemented correctly).

Let's set up a simple example site to walk through an implementation of a dark-mode that both respects the user's OS preference and falls back to this preference if JS is disabled or unavailable.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Theming example</title>

    <style>
      html {
        --color__bg: #fee;
        --color__text: #333;

        color: var(--color__text);
        background-color: var(--color__bg);
      }
    </style>
  </head>
  <body>
    <h1>Theming example</h1>
  </body>
</html>
```

In order to check if the user's device has dark-mode enabled and alter our CSS variables accordingly, we can use the CSS media feature `prefers-color-scheme` and check if its value is set to `dark`. This can match one of three values; `no-preference`, `light` or `dark`. Of the web features mentioned in this post, `prefers-color-scheme` has the worst browser support at the time of writing. While it is supported in the latest version of most browsers, Edge and IE **do not** support this CSS feature at all.

```css
@media (prefers-color-scheme: dark) {
  html {
    --color__bg: #333;
    --color__text: #fee;
  }
}
```

Let's update our markup to add a checkbox input that will allow our users to change the theme if they wish.

```html
<body>
  <h1>Theming example</h1>

  <label>
    Toggle dark theme:
    <input id="theme-toggle" type="checkbox" name="theme-toggle" />
  </label>
</body>
```

Let's now hook up our checkbox to set a data attribute on out HTML-element that corresponds to the active theme. If you are not familiar with data attributes in HTML and JavaScript a suggest having a look at [MDN's documentation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes).

```js
const htmlEl = document.firstElementChild
const themeToggleEl = document.getElementById('theme-toggle')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

if (previousTheme) {
  htmlEl.dataset.theme = previousTheme
} else if (prefersDark) {
  htmlEl.dataset.theme = 'dark'
  themeToggleEl.checked = true
}

themeToggleEl.addEventListener('change', e => {
  const selectedTheme = e.target.checked ? 'dark' : 'light'
  htmlEl.dataset.theme = selectedTheme
})
```

We can now add some styles that respect the data attribute that we are setting on our HTML-element.

```css
html[data-theme='dark'] {
  --color__bg: #333;
  --color__text: #fee;
}

html[data-theme='light'] {
  --color__bg: #fee;
  --color__text: #333;
}
```

To persist the theme that the user select we can use the [`window.localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to read and write to the current domain's `Storage` object.

```js
const htmlEl = document.firstElementChild
const themeToggleEl = document.getElementById('theme-toggle')
const previousTheme = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

if (previousTheme) {
  htmlEl.dataset.theme = previousTheme
} else if (prefersDark) {
  htmlEl.dataset.theme = 'dark'
  localStorage.setItem('theme', 'dark')
  themeToggleEl.checked = true
}

themeToggleEl.addEventListener('change', e => {
  const selectedTheme = e.target.checked ? 'dark' : 'light'
  htmlEl.dataset.theme = selectedTheme
  localStorage.setItem('theme', selectedTheme)
})
```

Finally, let's try to avoid an incorrect theme flash by checking for a theme in `localStorage` and appropriately updating the HTML-element's `theme` data-attribute.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Theming example</title>

    <style>
      html {
        --color__bg: #fee;
        --color__text: #333;

        color: var(--color__text);
        background-color: var(--color__bg);
      }

      @media (prefers-color-scheme: dark) {
        html {
          --color__bg: #333;
          --color__text: #fee;
        }
      }

      html[data-theme='dark'] {
        --color__bg: #333;
        --color__text: #fee;
      }

      html[data-theme='light'] {
        --color__bg: #fee;
        --color__text: #333;
      }
    </style>

    <script>
      ;(() => {
        const htmlEl = document.firstElementChild
        const previousTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
          .matches

        if (previousTheme) {
          htmlEl.dataset.theme = previousTheme
        } else if (prefersDark) {
          htmlEl.dataset.theme = 'dark'
          localStorage.setItem('theme', 'dark')
        }
      })()
    </script>
  </head>
  <body>
    <h1>Theming example</h1>

    <label>
      Toggle dark theme:
      <input
        id="theme-toggle"
        type="checkbox"
        name="theme-toggle"
        value="dark"
      />
    </label>

    <script>
      ;(() => {
        const htmlEl = document.firstElementChild
        const themeToggleEl = document.getElementById('theme-toggle')
        const prefersDark = htmlEl.dataset.theme === 'dark'

        if (prefersDark) {
          themeToggleEl.checked = true
        }

        themeToggleEl.addEventListener('change', e => {
          const selectedTheme = e.target.checked ? 'dark' : 'light'
          htmlEl.dataset.theme = selectedTheme
          localStorage.setItem('theme', selectedTheme)
        })
      })()
    </script>
  </body>
</html>
```

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/dark-mode-toggle-phwrb?fontsize=14&hidenavigation=1&theme=dark)

Thanks to some nice and new (but widely supported) web features, it doesn't take much to implement a dark-mode toggle. Now all that's left is to add a dark-theme to your next personal project and get with the theme-toggle checkbox styling!

If you came across any issue or have a question regarding this post, feel free to submit it [here](https://github.com/shwilliam/shwilliam.github.io/issues).
