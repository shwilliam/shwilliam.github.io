import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import {BoxCenter} from 'components/box'
import Head from 'components/head'
import Title from 'components/title'
import Projects from 'containers/queries/projects'
import {ProjectsListWithFilter} from 'components/projects-list'
import CategoryFilter from 'components/category-filter'

const Work = ({data}) => (
  <Layout>
    <Head pageTitle={data.workJson.title} />
    {/* TODO: refactor to use content from `about.json` */}
    <BoxCenter>
      <Title as="h2">Open-Source Projects</Title>
      <CategoryFilter />
      <Projects render={ProjectsListWithFilter} />
    </BoxCenter>
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
