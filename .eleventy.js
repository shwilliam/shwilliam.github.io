const CleanCSS = require('clean-css')
const readingTime = require('reading-time')

module.exports = config => {
  // collections
  config.addCollection('projects', collection =>
    collection
      .getFilteredByGlob('src/projects/*.md')
      .filter(({data}) => !!data.featured)
      .sort(({data: data1}, {data: data2}) => data2.featured - data1.featured),
  )
  config.addCollection('blog', collection =>
    collection.getFilteredByGlob('src/blog/*.md'),
  )

  // plugins
  config.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))
  config.addPlugin(require('@11ty/eleventy-plugin-rss'))

  // copy files
  config.addPassthroughCopy('src/CNAME')
  config.addPassthroughCopy('src/robots.txt')
  config.addPassthroughCopy('src/favicon.ico')

  // filters
  config.addLiquidFilter(
    'latest',
    d =>
      d.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[
        d.length - 1
      ],
  )
  config.addLiquidFilter('toIsoString', d => new Date(d).toISOString())
  config.addLiquidFilter('toIsoStringNoTimezone', d => {
    const date = new Date(d)

    return `${date.getUTCFullYear()}-${`0${date.getUTCMonth() + 1}`.slice(
      -2,
    )}-${`0${date.getUTCDate()}`.slice(-2)}`
  })
  config.addLiquidFilter('spaceToSlash', d => d.split(' ').join('/'))
  config.addFilter('cssmin', d => new CleanCSS({}).minify(d).styles)
  config.addFilter('readingTime', d => readingTime(d).text)

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      data: 'data',
    },
    templateFormats: ['liquid', 'md', 'css', 'js', 'jpg', 'png', 'pdf'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
    passthroughFileCopy: true,
  }
}
