import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import Box, {BoxFlex} from 'components/box'
import Head from 'components/head'
import ImgAbout from 'components/img-about'

const About = ({data}) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <BoxFlex>
      <ImgAbout />
      <Box
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
    </BoxFlex>
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
