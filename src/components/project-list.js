import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const ProjectList = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
          ) {
            edges {
              node {
                excerpt(pruneLength: 50)
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
          <ol className="list dib w-100 w-30-ns ma0 pa0 bb br-ns bt-0-ns bt">
            {
              projects.map(({ node }) => {
                const { excerpt, frontmatter } = node
                return (
                  <li key={frontmatter.path}>
                    <Link
                      to={frontmatter.path}
                      className="link pv2-ns pv4 dib near-black w-100 ph3-ns ph4 pv2"
                      activeClassName="bl bw2"
                    >
                      <div className="f6 gray">
                        {frontmatter.date}
                      </div>
                      <h3 className="f4 ma0">{frontmatter.title}</h3>
                      <div className="dn-ns">
                        {excerpt}
                      </div>
                    </Link>
                  </li>
                )
              })
            }
          </ol>
        )
      }}
    />
  )
}

export default ProjectList
