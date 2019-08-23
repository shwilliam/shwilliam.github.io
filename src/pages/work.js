import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import {Center} from 'components/utils'
import Head from 'components/head'
import Projects from 'containers/queries/projects'
import ProjectsList from 'components/projects-list'
import CategoryFilter from 'components/category-filter'

const Work = ({data}) => (
  <Layout>
    <Head pageTitle={data.workJson.title} />
    <Center>
      <h2>{data.workJson.title}</h2>
      <CategoryFilter
        filters={['react', 'vue', 'graphql', 'stylus', 'vanilla']}
      />
      <Projects render={ProjectsList} />
    </Center>
  </Layout>
)

Work.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Work

export const query = graphql`
  query WorkQuery {
    workJson {
      title
    }
  }
`
