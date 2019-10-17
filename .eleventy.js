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
    templateFormats: ['liquid', 'md', 'jpg', 'png', 'ico'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
  }
}
