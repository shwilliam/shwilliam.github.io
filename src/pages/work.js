import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import {BoxCenter} from 'components/box'
import Head from 'components/head'
import Title from 'components/title'
import OSProjects from 'containers/queries/os-projects'
import ProjectsList from 'components/projects-list'

const Work = ({data}) => (
  <Layout>
    <Head pageTitle={data.workJson.title} />
    <BoxCenter>
      <Title as="h2">Open Source Libraries</Title>
      <OSProjects render={ProjectsList} />
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
