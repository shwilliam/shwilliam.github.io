import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {ImgStyled as Img} from './img-avatar.css'

const ImageAvatar = () => {
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

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} alt="" />
}

export default ImageAvatar
