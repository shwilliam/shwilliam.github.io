import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link, graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" keywords={[`home`]} />
      <ol className="list pa0">
        {
          projects.map(({ node }) => {
            const { excerpt, frontmatter } = node
            return (
              <li key={frontmatter.path}>
                <Link to={frontmatter.path} className="link">
                  {frontmatter.title}
                  {frontmatter.date}
                  {excerpt}
                </Link>
              </li>
            )
          })
        }
      </ol>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          excerpt: PropTypes.string,
          frontmatter: PropTypes.shape({
            path: PropTypes.string,
            title: PropTypes.string,
            date: PropTypes.string
          })
        }).isRequired
      ).isRequired
    }).isRequired
  }).isRequired
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
