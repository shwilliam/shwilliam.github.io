---
title: Easy CI with GitHub Actions
titleShort: GitHub Actions
date: 2020-01-20
description: Get started automating your workflow using GH Actions
layout: templates/blog-post.liquid
priority: 0.5
changefreq: 'monthly'
---

GitHub Actions were recently publicly released on November 13, which enable easy automation and orchestration of software workflows. In this post we will explore the value they can add by setting up an action that handles deployment of my [personal site](https://github.com/shwilliam/shwilliam.github.io), a static site built using Eleventy and hosted on GH Pages.

If you wish to follow along, you can clone one of the many [Eleventy starter projects](https://www.11ty.dev/docs/starter/) to quickly get set up with a static site. Also, be sure to replace details such as the build script and deployment branch to correspond to those of your project.

To get started, navigate to your repo on GitHub and open the 'Actions' tab. Here we can see an overview of popular actions used by the community. Selecting 'Set up a workflow yourself' opens up a sample YAML file in `.github/workflow/`. At the moment this won't do a whole lot but is helpful for getting a taste of the syntax we need to use.

```yaml
name: CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - name: Run a one-line script
        run: echo Hello, world!
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
```

As we can see, there isn't much too it; Basically a list of steps performed in sequence, run on a particular hook (in this case `push`). The first steps in our build job uses an action called `checkout`. This is very common to see as it simply helps us fetch and checkout our repo. For the most common workflows, like `checkout` there are many open source actions easily accessible in the [GitHub marketplace](https://github.com/marketplace?type=actions) that we can use to create our custom action.

My personal webpage is a straightforward static site built with eleventy that is currently hosted on GH Pages. Deployment is very straightforward and simply involves running a build script and then a script that pushes the build directory to the master branch.

The first thing we can do is determine when our action should run. In this case, I want my site to be built and deployed on every push to the `dev` branch.

```yaml
name: Deploy Eleventy site to GH Pages

on:
  push:
    branches:
      - dev

    [...]
```

The site's build process requires several external dependencies (such as `node-fetch` and `clean-css`) which we need to install before build, which is handled by `actions-eleventy`.

```yaml
[...]

jobs:
  build:

  runs-on: ubuntu-latest

  steps:
  - name: Checkout repo
  uses: actions/checkout@v1
  - name: Install deps
  uses: bahmutov/npm-install@v1
  - name: Build
  uses: TartanLlama/actions-eleventy@v1.1
```

On build our site also fetches GH contribution data which currently uses an environment variable to consume a GH access token.

To allow this to work in our action we must first set up a repository secret that we can then set as the value of the environment variable. To add the secret to our repo, navigate to 'Secrets' in the repository settings, and click 'Add a new secret'.

![Add an access token](https://shwilliam.com/images/gh-token.png)

To provide this in our build step as an environment variable we can use `set-env` action and run this prior to build.

```yaml
jobs:
  build:

  [...]

  - name: Env variables
  uses: allenevans/set-env@v1.0.0
  with:
    GH_TOKEN: ${{secrets.GH_TOKEN}}
  - name: Build
  uses: TartanLlama/actions-eleventy@v1.1
```

Finally, we run the `actions-gh-pages` action pushing our build files to `master`, passing the GH access token we configured, resulting in a YAML file that looks like the following:

```yaml
name: Deploy Eleventy site to GH Pages

on:
  push:
    branches:
      - dev

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v1
      - name: Install deps
        uses: bahmutov/npm-install@v1
      - name: Env variables
        uses: allenevans/set-env@v1.0.0
        with:
          GH_TOKEN: ${{secrets.GH_TOKEN}}
      - name: Build
        uses: TartanLlama/actions-eleventy@v1.1
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v1.1.0
        env:
          PUBLISH_DIR: dist
          PUBLISH_BRANCH: master
          GITHUB_TOKEN: ${{secrets.GH_TOKEN}}
```

To add this workflow to our project we can commit this file right in the GitHub website by clicking the 'Start commit' button.

As seen, setting up custom GH Actions is very straightforward and easy to use to offload some of the burdens of our workflow. The action we created in this post is only the beginning and can be extended or composed together with other actions to, for example, integrate testing CI or more complex git workflows.

If you came across any issue or have a question regarding this post, feel free to submit it [here](https://github.com/shwilliam/shwilliam.github.io/issues).
