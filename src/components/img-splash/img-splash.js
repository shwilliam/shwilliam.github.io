import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import {ImageSplashStyled, ImageSplashWrapper} from './img-splash.css'

const ImageSplash = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "trump.png"}) {
        childImageSharp {
          fluid(maxWidth: 960, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ImageSplashWrapper>
      <Link to="/home">
        <ImageSplashStyled
          fluid={data.placeholderImage.childImageSharp.fluid}
          style={{}}
          alt="Trump calls out haters"
        />
      </Link>
    </ImageSplashWrapper>
  )
}

export default ImageSplash
