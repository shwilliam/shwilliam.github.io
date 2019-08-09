import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'

const OSHighlights = ({render}) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          limit: 5
          filter: {
            fileAbsolutePath: {regex: "/(/projects).*\\\\.md/"}
            frontmatter: {featured: {eq: "os"}}
          }
        ) {
          edges {
            node {
              frontmatter {
                date(formatString: "DD-MM-YYYY")
                path
                link
                source
                title
                excerpt
                featured
              }
            }
          }
        }
      }
    `}
    render={data => render(data.allMarkdownRemark.edges)}
  />
)

OSHighlights.propTypes = {
  render: PropTypes.func.isRequired,
}

export default OSHighlights
