import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

export default function Template({data}) {
  const {markdownRemark} = data
  const {frontmatter, html} = markdownRemark

  return (
    <>
      <header>
        <h2>
          {frontmatter.link ? (
            <a
              href={frontmatter.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {frontmatter.title}
            </a>
          ) : (
            frontmatter.title
          )}
        </h2>
        <div>{frontmatter.date}</div>
      </header>

      {/* TODO: ensure accessibility on navigation */}
      <section dangerouslySetInnerHTML={{__html: html}} />
    </>
  )
}

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        link: PropTypes.string,
        image: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({
              // TODO: describe shape
            }),
          }),
        }),
        imgUrl: PropTypes.string,
        imgAlt: PropTypes.string,
        photos: PropTypes.string,
      }),
      html: PropTypes.string.isRequired,
    }),
  }),
}

export const pageQuery = graphql`
  query projectByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        category
        path
        title
        link
        image {
          childImageSharp {
            fluid(maxWidth: 975) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        imgUrl
        imgAlt
        photos
      }
    }
  }
`
