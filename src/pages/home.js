import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import GitHubButton from 'react-github-btn'
import FeaturedProjects from 'containers/queries/featured-projects'
import BlogPostsRecent from 'containers/queries/blog-posts-recent'
import ProjectsGrid from 'components/projects-grid'
import BlogList from 'components/blog-list'
import Layout from 'components/layout'
import {Center, VPadded} from 'components/utils'
import Banner, {BannerHeading, BannerSubheading} from 'components/banner'
import {GatsbyLinkButton} from 'components/link-button'

const Home = ({data}) => (
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

    <VPadded>
      <Center>
        <h2>Featured Projects</h2>
        <FeaturedProjects render={ProjectsGrid} />
        <GatsbyLinkButton to="/work">More work</GatsbyLinkButton>
      </Center>
    </VPadded>

    <VPadded>
      <Center>
        <h2>Recent Blog Posts</h2>
        <BlogPostsRecent render={BlogList} />
        {/* <GatsbyLinkButton to="/blog">All posts</GatsbyLinkButton> */}
      </Center>
    </VPadded>
  </Layout>
)

Home.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Home

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      heading
      subheading
    }
  }
`
