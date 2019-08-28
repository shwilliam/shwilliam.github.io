const path = require('path')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [
        new DirectoryNamedWebpackPlugin({
          exclude: /node_modules/,
        }),
      ],
    },
  })
}

// creates blog pages from template
exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators

  const blogTemplate = path.resolve('src/templates/blog.js')

  return graphql(`
    {
      allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]}
        limit: 999
        filter: {fileAbsolutePath: {regex: "/(/blog).*\\\\.md/"}}
      ) {
        edges {
          node {
            html
            frontmatter {
              path
              date
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: blogTemplate,
        context: {},
      })
    })
  })
}
