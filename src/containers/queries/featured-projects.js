import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'

const Projects = ({render}) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          limit: 1000
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
                category
                excerpt
                tech
                imgUrl
              }
            }
          }
        }
      }
    `}
    render={data => render(data.allMarkdownRemark.edges)}
  />
)

Projects.propTypes = {
  render: PropTypes.func.isRequired,
}

export default Projects
