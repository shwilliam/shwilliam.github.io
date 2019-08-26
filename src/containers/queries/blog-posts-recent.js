import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'

const BlogPosts = ({render}) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          limit: 3
          filter: {fileAbsolutePath: {regex: "/(/blog).*\\\\.md/"}}
        ) {
          edges {
            node {
              frontmatter {
                date(formatString: "DD-MM-YYYY")
                path
                title
                description
              }
            }
          }
        }
      }
    `}
    render={data => render(data.allMarkdownRemark.edges)}
  />
)

BlogPosts.propTypes = {
  render: PropTypes.func.isRequired,
}

export default BlogPosts
