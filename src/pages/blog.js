import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Head from 'containers/head'
import BlogList from 'containers/blog-list'
import Layout from 'components/layout'
import {Center} from 'components/utils'
import BlogPosts from 'containers/queries/blog-posts'

const Blog = ({data}) => (
  <Layout>
    <Head pageTitle={data.blogJson.title} />
    <Center>
      <h2>{data.blogJson.title}</h2>
      <BlogPosts render={BlogList} />
    </Center>
  </Layout>
)

Blog.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Blog

export const query = graphql`
  query BlogQuery {
    blogJson {
      title
    }
  }
`
