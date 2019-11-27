module.exports = function(config) {
  config.addCollection('projects', collection =>
    collection.getFilteredByGlob('src/projects/*.md'),
  )

  config.addCollection('blog', collection =>
    collection.getFilteredByGlob('src/blog/*.md'),
  )

  config.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))

  config.addPlugin(require('@11ty/eleventy-plugin-rss'))

  config.addLiquidFilter(
    'latest',
    d =>
      d.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[
        d.length - 1
      ],
  )

  config.addLiquidFilter('toIsoString', d => new Date(d).toISOString())

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      data: 'data',
    },
    templateFormats: ['liquid', 'md', 'css', 'ico', 'jpg', 'png', 'gif', 'pdf'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
    passthroughFileCopy: true,
  }
}
