import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import GitHubButton from 'react-github-btn'
import FeaturedProjects from 'containers/queries/featured-projects'
import ProjectsList from 'components/projects-list'
import Layout from 'components/layout'
import {BoxCenter} from 'components/box'
import Banner from 'components/banner'
import WelcomeText from 'components/welcome-text'
import Title from 'components/title'
import {GatsbyLinkButton} from 'components/link-button'

const Index = ({data}) => (
  <Layout>
    <Banner>
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
    </Banner>

    <BoxCenter>
      <Title as="h2">Featured Projects</Title>
      <FeaturedProjects render={ProjectsList} />
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
