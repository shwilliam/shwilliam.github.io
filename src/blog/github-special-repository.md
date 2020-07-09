---
title: Undocumented GitHub Public Profile Customization
titleShort: Undocumented GitHub Profile Customization
date: 2020-07-08
description: Use a "Special" Repository as a Public GitHub Profile
layout: templates/blog-post.liquid
priority: 0.5
changefreq: 'monthly'
---

A few hours ago, while perusing some new projects on GitHub, I came across an
unusual-looking profile page.

![Tim Holman's GitHub profile showing a new public profile UI](https://user-images.githubusercontent.com/38357771/87008102-17567600-c178-11ea-95dd-c4c1da1ca290.png)

It turns out that GitHub has recently rolled out an undocumented feature
allowing a subset of users to render the `README` of a "special" repository as a
public profile on their profile. To set this up, create a repository with the
same name as your GitHub username. In my case, I created a new repo with the name
[`shwilliam`](https://github.com/shwilliam/shwilliam).

![Prompt to share README to profile displayed on "special" repository create](https://user-images.githubusercontent.com/38357771/87008110-1ae9fd00-c178-11ea-935d-a4c1463c8e03.png)

If you navigate to your newly created repository (at
[github.com/username/username](https://github.com/shwilliam/shwilliam)), you should
be prompted with the option to share this project's `README` contents to your profile.
Once you've confirmed this, all that's left to do is create a `README.md` file in
the project root with the contents you wish to display!

If you're not familiar with [Tim's work](https://github.com/tholman) you should
definitely check out [Wowen Wilson](http://tholman.com/post/wowen-wilson/) and
[elevator.js](https://github.com/tholman/elevator.js). Also, if you came across
any issue or have a question regarding this post, feel free to submit it
[here](https://github.com/shwilliam/shwilliam.github.io/issues).
