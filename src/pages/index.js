import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import Box, {BoxCenter} from 'components/box'
import WelcomeText from 'components/welcome-text'
import Title from 'components/title'
import OSList from 'components/os-list'
import VisList from 'components/vis-list'
import {graphql} from 'gatsby'

const Index = ({data}) => (
  <Layout>
    <Box>
      <WelcomeText>
        {data.homeJson.content.childMarkdownRemark.html}
      </WelcomeText>
    </Box>

    <BoxCenter>
      <Title as="h2">Open Source Projects</Title>
      <OSList />
    </BoxCenter>

    <BoxCenter>
      <Title as="h2">Data Visualizations</Title>
      <VisList />
    </BoxCenter>
  </Layout>
)

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Index

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      gallery {
        title
        copy
      }
    }
  }
`
