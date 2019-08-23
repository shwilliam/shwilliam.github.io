import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import GitHubButton from 'react-github-btn'
import FeaturedProjects from 'containers/queries/featured-projects'
import ProjectsGrid from 'components/projects-grid'
import Layout from 'components/layout'
import {Center} from 'components/utils'
import Banner, {BannerHeading, BannerSubheading} from 'components/banner'
import {GatsbyLinkButton} from 'components/link-button'

const Index = ({data}) => (
  <Layout>
    <Banner>
      <BannerHeading>{data.homeJson.heading}</BannerHeading>
      <BannerSubheading>{data.homeJson.subheading}</BannerSubheading>
      <GitHubButton
        href="https://github.com/shwilliam"
        data-size="large"
        aria-label="Follow me on GitHub"
      >
        Follow me
      </GitHubButton>
    </Banner>

    <Center>
      <h2>Featured Projects</h2>
      <FeaturedProjects render={ProjectsGrid} />
      <GatsbyLinkButton to="/work">More work</GatsbyLinkButton>
    </Center>
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
      heading
      subheading
    }
  }
`
