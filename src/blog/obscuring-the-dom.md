---
title: Obscuring the DOM
titleShort: Obscuring the DOM
date: 2019-08-25
description: Overview of common techniques to hide DOM elements and their affect on accessibility
layout: templates/blog-post.liquid
priority: 0.5
changefreq: 'monthly'
---

As a web developer, I can't think of a single project that I have worked on that didn't require some logic dealing with hiding or showing DOM elements. Be it as part of an accordion, some tabs, a simple toast notification or a modal, toggling DOM elements in and out of view is something I find myself implementing **all the time**.

While it may be tempting to reach for the approach that seems easiest, or perhaps most familiar (often `display: none;`), it is important to take into consideration the various ways that these decisions affect users of your website.

This article will provide a brief description of some of the most common approaches that I have come across, and explain the repercussions of using them.

Typically, there are 3 extents to which we could hide DOM elements:

1. Hidden for everyone
2. Hidden for screen users
3. Hidden for assistive technology (AT) users

Which of these options is most appropriate can only be evaluated on a case-by-case basis and will determine best implementation for you. By using an inappropriate technique, you may be excluding a significant portion of your user-base from accessing part(s) of your site.

## 1. Hidden for everyone

### `display: none;`

By far the most common way of hiding an element for everyone is to set its CSS `display` property to `none`. This will **hide the element visually** and make it **ignored by ATs**. This technique will also remove the targeted element from the document's normal flow, meaning that it will not take up any space on the webpage.

```css
.hidden {
  display: none;
}
```

### `hidden`

The same effect can be achieved through the application of the HTML attribute `hidden`, which I also like to explicitly style to support legacy browsers.

```css
[hidden] {
  display: none;
}
```

Both of these approaches are great, they are easy to read, short and behave as expected across browsers; however, if you wish to transition an element's styles while toggling in and out of view, `display: none;` will **not** work. A common approach to avoid this limitation is explicitly setting an element's `max-width` or `max-height` to be `0` along with `overflow: hidden;`. By providing an element no space to occupy, its contents will entirely collapse and be ignored by **most** screen-readers. To ensure the content is completely ignored by ATs, I like to combine this approach with `visibility: hidden;`.

```css
.el {
  max-height: 999px;
  overflow: hidden;
  visibility: hidden;
  transition: 1s max-height ease;
}

.el--hidden {
  max-height: 0;
}
```

### `visibility: hidden;`

If you are hiding something with the intent of showing it eventually, you may wish for the element to **respect the space it takes up when visible**. This can simply be achieved defining the CSS property `visibility: hidden;`. Note that this, again, **hides the content both visually and to ATs**.

```css
.hidden {
  visibility: hidden;
}
```

## 2. Hidden for screen users

With minimalism dominating web design, it may seem natural to remove as many "inessential" elements as possible, often without considering the differing ways in which users navigate our site.

To **clean up the visual UI but ensure elements are picked up by ATs**, the most common technique is to move an element offscreen, or hide without width or height 0. There are a plethora of CSS snippets that will achieve this, most of which are variations of the example shown below.

```css
.sr-only {
  clip: rect(1px 1px 1px 1px); /* IE 6/7 */
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
}
```

In the case that the target element is interactive, you will most likely want to be visible when focused. This can simply be achieved by modifying the selector to only target elements that are not active or focused (eg. `.sr-only:not(:focus):not(:active)`).

Alternatively, you can use the HTML ARIA attributes, such as `aria-describedby` or `aria-labelledby`, to force screen-readers to announce information related to a hidden element.

## 3. Hidden for assistive technology (AT) users

### `aria-hidden`

In certain situations, you will find yourself using HTML elements for solely decorative purposes, for example icon fonts. In that case, you will want to ensure that these are **not picked up by ATs**. This can be done by simply setting the elements's `aria-hidden` attribute to `true`.

## Summary

To recap, we've gone over:

1. Hidden for everyone
   - `display: none` or HTML `hidden`
   - `visibility: hidden;` for transitioning elements
2. Hidden for screen users
   - Move offscreen (and clip)
3. Hidden for assistive technology users
   - `aria-hidden`

It is important to note that, as we are dealing with code that runs on many different browser engines, in different environments, based on a living specification, and will be interpreted by various assistive technologies, it is crucial that you test these approaches yourself. I like to keep [this](http://terrillthompson.com/tests/hiddencontent.html) page, created by Terrill Thompson, bookmarked for this purpose. It implements these techniques (and several more), which you can use to easily try them out.

I hope that this post will encourage you to think twice before slapping a `display: none;` style on an element and be a bit more cautious of the accessibility implications of styling your site.

If you came across any issue or have a question regarding this post, feel free to submit it [here](https://github.com/shwilliam/shwilliam.github.io/issues).

## Further reading:

[Invisible Content Just for Screen Reader Users](https://webaim.org/techniques/css/invisiblecontent/)

[Beware Smushed Off-screen Accessible Text](https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe)

[Inclusively Hidden](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html)

[Now You See Me](https://alistapart.com/article/now-you-see-me/)
