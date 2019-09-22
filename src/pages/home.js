import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import GitHubButton from 'react-github-btn'
import FeaturedProjects from 'containers/queries/featured-projects'
import BlogPostsRecent from 'containers/queries/blog-posts-recent'
import ProjectsGrid from 'containers/projects-grid'
import {Center} from 'components/utils'
import BlogList from 'containers/blog-list'
import Layout from 'components/layout'
import {GatsbyLinkButton} from 'components/link-button'
import Section from 'components/section'
import Banner, {BannerHeading, BannerSubheading} from 'components/banner'

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

    <Section>
      <Center>
        <h2>Featured Projects</h2>
        <FeaturedProjects render={ProjectsGrid} />
        <GatsbyLinkButton to="/work">More work</GatsbyLinkButton>
      </Center>
    </Section>

    <Section>
      <Center>
        <h2>Recent Blog Posts</h2>
        <BlogPostsRecent render={BlogList} />
        {/* <GatsbyLinkButton to="/blog">All posts</GatsbyLinkButton> */}
      </Center>
    </Section>
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
