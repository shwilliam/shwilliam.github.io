import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import OSHighlights from 'containers/queries/os-highlights'
import Microsites from 'containers/queries/microsites'
import ProjectsList from 'components/projects-list'
import Layout from 'components/layout'
import Box, {BoxCenter} from 'components/box'
import WelcomeText from 'components/welcome-text'
import Title from 'components/title'
import {GatsbyLinkButton} from 'components/link-button'

const Index = ({data}) => (
  <Layout>
    <Box>
      <WelcomeText>
        {data.homeJson.content.childMarkdownRemark.html}
      </WelcomeText>
    </Box>

    <BoxCenter>
      <Title as="h2">Open Source Libraries</Title>
      <OSHighlights render={ProjectsList} />
      <GatsbyLinkButton to="/work">More</GatsbyLinkButton>
    </BoxCenter>

    <BoxCenter>
      <Title as="h2">Microsites</Title>
      <Microsites render={ProjectsList} />
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
