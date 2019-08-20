import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import Box, {BoxFlexReverse} from 'components/box'
import Head from 'components/head'
import ImgAbout from 'components/img-about'

const About = ({data}) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <BoxFlexReverse>
      <ImgAbout />
      <Box
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
    </BoxFlexReverse>
  </Layout>
)

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
