import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "avatar.png"}) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      fixed={data.placeholderImage.childImageSharp.fixed}
      style={{
        borderRadius: '50%',
        verticalAlign: 'middle',
        marginRight: '0.8rem',
        position: 'relative',
        top: '-0.3rem',
      }}
      alt=""
    />
  )
}

export default Image
