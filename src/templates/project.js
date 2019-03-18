import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template ({
  data
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} keywords={[`project`]} />
      <header>
        <h2 className="mb0">
          <a className="f-subheadline-l f1 lh-title link near-black" href={frontmatter.link} target="_blank" rel="noopener noreferrer">
            {frontmatter.title}
          </a>
        </h2>
        <div className="gray">{frontmatter.date}</div>
      </header>
      <section dangerouslySetInnerHTML={{ __html: html }}/>
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
      }),
      html: PropTypes.string.isRequired
    })
  })
}

export const pageQuery = graphql`
  query projectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        link
      }
    }
  }
`
