const CleanCSS = require('clean-css')
const readingTime = require('reading-time')

module.exports = config => {
  // collections
  config.addCollection('projects', collection =>
    collection
      .getFilteredByGlob('src/projects/*.md')
      .filter(({data}) => !!data.featured)
      .sort(({date: data1}, {data: data2}) => data2.date - data1.date)
      .sort(({data: data1}, {data: data2}) =>
        data2 !== true ? data1.featured - data2.featured : 1,
      ),
  )
  config.addCollection('libraries', collection =>
    collection
      .getFilteredByGlob('src/libraries/*.md')
      .filter(({data}) => !!data.featured)
      .sort(({date: data1}, {data: data2}) => data2.date - data1.date)
      .sort(({data: data1}, {data: data2}) =>
        data2 !== true ? data1.featured - data2.featured : 1,
      ),
  )
  config.addCollection('photos', collection => {
    const photosByYear = collection
      .getFilteredByGlob('src/photos/**/*.md')
      .reduce((photosByYear, project) => {
        const year = new Date(project.data.date).getFullYear()

        if (photosByYear[year]) {
          return {
            ...photosByYear,
            [year]: [...photosByYear[year], project.data],
          }
        } else {
          return {...photosByYear, [year]: [project.data]}
        }
      }, {})

    return Object.entries(photosByYear)
      .sort(([year1], [year2]) => year2 - year1)
      .map(([year, projects]) => ({
        year,
        projects,
      }))
  })
  config.addCollection('blog', collection =>
    collection.getFilteredByGlob('src/blog/*.md'),
  )
  config.addCollection('contributions', collection =>
    collection.getFilteredByGlob('src/contributions/*.md'),
  )

  // plugins
  config.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))
  config.addPlugin(require('@11ty/eleventy-plugin-rss'))
  config.addPlugin(require('@11ty/eleventy-plugin-inclusive-language'))

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
  config.addLiquidFilter('toYear', d => {
    const date = new Date(d)

    return date.getFullYear()
  })
  config.addLiquidFilter('toDateString', d => {
    const date = new Date(d)
    const options = {month: 'long', day: 'numeric', year: 'numeric'}

    return new Intl.DateTimeFormat('default', options).format(date)
  })
  config.addLiquidFilter('splitCSV', d => d.split(', '))
  config.addLiquidFilter('commaToSlash', d => d.split(', ').join('/'))
  config.addLiquidFilter('tagToClassSuffix', d =>
    d
      .toLowerCase()
      .replace('.', '')
      .replace(' ', '-'),
  )
  config.addFilter('cssmin', d => new CleanCSS({}).minify(d).styles)
  config.addFilter('readingTime', d => readingTime(d).text)

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      data: 'data',
    },
    templateFormats: [
      'liquid',
      'md',
      'css',
      'js',
      'jpg',
      'jpeg',
      'png',
      'svg',
      'pdf',
      'woff',
      'woff2',
    ],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
    passthroughFileCopy: true,
  }
}
