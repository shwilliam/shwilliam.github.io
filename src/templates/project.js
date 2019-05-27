import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BrowserWindow from '../components/browser-window'
import Carousel from '../components/carousel'

export default function Template({data}) {
  const {markdownRemark} = data
  const {frontmatter, html} = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} keywords={[`project`]} />
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
      {frontmatter.category === 'photos' ? (
        <Carousel>
          {frontmatter.photos.split(', ').map((photo, i) => (
            <figure key={photo}>
              <figcaption className="sr-only">
                {frontmatter.imgAlt.split(', ')[i]}
              </figcaption>
              <img src={photo} />
            </figure>
          ))}
        </Carousel>
      ) : (
        <figure>
          <figcaption className="sr-only">{frontmatter.imgAlt}</figcaption>
          {!frontmatter.imgUrl && !frontmatter.image ? null : (
            <BrowserWindow>
              {frontmatter.imgUrl ? (
                <img src={frontmatter.imgUrl} />
              ) : (
                <Img fluid={frontmatter.image.childImageSharp.fluid} />
              )}
            </BrowserWindow>
          )}
        </figure>
      )}
      {/* TODO: use aria-live? */}
      <section dangerouslySetInnerHTML={{__html: html}} />
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
        photos
      }
    }
  }
`
