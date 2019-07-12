import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'

const ProjectList = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          limit: 1000
          filter: {fileAbsolutePath: {regex: "/(/projects).*\\\\.md/"}}
        ) {
          edges {
            node {
              html
              frontmatter {
                date(formatString: "DD-MM-YYYY")
                path
                title
                category
              }
            }
          }
        }
      }
    `}
    render={data => {
      const projects = data.allMarkdownRemark.edges

      return (
        <ul>
          {projects.map(({node}) => {
            const {frontmatter} = node

            return (
              <li key={frontmatter.path}>
                <Link to={frontmatter.path}>
                  <p>{frontmatter.title}</p>
                  <p>{frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      )
    }}
  />
)

export default ProjectList
