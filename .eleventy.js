module.exports = function(config) {
  config.addCollection('projects', collection =>
    collection.getFilteredByGlob('src/projects/*.md'),
  )

  config.addCollection('blog', collection =>
    collection.getFilteredByGlob('src/blog/*.md'),
  )

  config.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      data: 'data',
    },
    templateFormats: ['liquid', 'md', 'css', 'ico', 'jpg', 'png', 'gif'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
    passthroughFileCopy: true,
  }
}
