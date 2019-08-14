import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'

const Microsites = ({render}) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          limit: 1000
          filter: {
            fileAbsolutePath: {regex: "/(/projects).*\\\\.md/"}
            frontmatter: {category: {eq: "site"}}
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
                tech
              }
            }
          }
        }
      }
    `}
    render={data => render(data.allMarkdownRemark.edges)}
  />
)

Microsites.propTypes = {
  render: PropTypes.func.isRequired,
}

export default Microsites
