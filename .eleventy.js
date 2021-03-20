const fs = require('fs'),
  pluginRss = require('@11ty/eleventy-plugin-rss'),
  pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight'),
  pluginNavigation = require('@11ty/eleventy-navigation'),
  markdownIt = require('markdown-it'),
  markdownItAnchor = require('markdown-it-anchor'),
  {DateTime} = require('luxon')

module.exports = config => {
  config.addPlugin(pluginRss)
  config.addPlugin(pluginSyntaxHighlight)
  config.addPlugin(pluginNavigation)
  config.setDataDeepMerge(true)

  config.addLayoutAlias('post', 'layouts/post.njk')

  config.addFilter('readableDate', dateObj =>
    DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('dd LLL yyyy'),
  )

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  config.addFilter('htmlDateString', dateObj =>
    DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd'),
  )

  // first n of collection
  config.addFilter('head', (array, n) =>
    n < 0 ? array.slice(n) : array.slice(0, n),
  )

  config.addFilter('min', (...numbers) => Math.min.apply(null, numbers))

  config.addFilter('filterTagList', tags =>
    (tags || []).filter(
      tag => ['all', 'nav', 'post', 'posts'].indexOf(tag) === -1,
    ),
  )

  config.addCollection('tagList', collection => {
    const tagSet = new Set()
    collection.getAll().forEach(item => {
      ;(item.data.tags || []).forEach(tag => tagSet.add(tag))
    })
    return [...tagSet]
  })

  config.addPassthroughCopy('src/img')
  config.addPassthroughCopy('src/css')

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: 'direct-link',
    permalinkSymbol: '#',
  })
  config.setLibrary('md', markdownLibrary)

  config.setBrowserSyncConfig({
    callbacks: {
      ready: (err, browserSync) =>
        browserSync.addMiddleware('*', (req, res) => {
          res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'})
          res.write(fs.readFileSync('dist/404.html'))
          res.end()
        }),
    },
    ui: false,
    ghostMode: false,
  })

  return {
    templateFormats: ['md', 'njk', 'html', 'jpg', 'png'],
    pathPrefix: '/',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: false,
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      data: '_data',
    },
  }
}
