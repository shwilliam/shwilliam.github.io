module.exports = function(config) {
  config.addCollection('posts', collection =>
    collection.getFilteredByGlob('src/posts/*.md'),
  )

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
    },
    templateFormats: ['liquid', 'md', 'css', 'ico', 'jpg', 'png', 'gif'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
    passthroughFileCopy: true,
  }
}
