import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import Box from 'components/box'
import Title from 'components/title'

export default function Template({data}) {
  const {markdownRemark} = data
  const {frontmatter, html} = markdownRemark

  return (
    <Layout>
      <Box>
        <header>
          <Title as="h2" size="large">
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
          </Title>
          <div>{frontmatter.date}</div>
        </header>

        <section dangerouslySetInnerHTML={{__html: html}} />
      </Box>
    </Layout>
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
      }
    }
  }
`
