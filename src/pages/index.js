import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import GitHubButton from 'react-github-btn'
import Projects from 'containers/queries/projects'
import ProjectsList from 'components/projects-list'
import Layout from 'components/layout'
import Box, {BoxCenter} from 'components/box'
import WelcomeText from 'components/welcome-text'
import Title from 'components/title'
import {GatsbyLinkButton} from 'components/link-button'
import CategoryFilter from 'components/category-filter'

const Index = ({data}) => (
  <Layout>
    <Box>
      <WelcomeText>
        {data.homeJson.content.childMarkdownRemark.html}
      </WelcomeText>
      <GitHubButton
        href="https://github.com/shwilliam"
        data-size="large"
        aria-label="Follow me on GitHub"
      >
        Follow me
      </GitHubButton>
    </Box>

    <BoxCenter>
      <Title as="h2">Projects</Title>
      <CategoryFilter />
      <Projects render={ProjectsList} />
      <GatsbyLinkButton to="/work">More projects</GatsbyLinkButton>
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
    }
  }
`
