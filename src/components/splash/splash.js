import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import {TrumpImg, TrumpWrapper} from './splash.css'

const Trump = () => {
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
    <TrumpWrapper>
      <Link to="/home">
        <TrumpImg
          fluid={data.placeholderImage.childImageSharp.fluid}
          alt="Trump calls out haters"
        />
      </Link>
    </TrumpWrapper>
  )
}

export default Trump
