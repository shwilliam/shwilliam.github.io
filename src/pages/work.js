import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import Box from 'components/box'
import Head from 'components/head'
import ProjectList from 'components/project-list'

const About = ({data}) => (
  <Layout>
    <Head pageTitle={data.workJson.title} />
    <Box>
      <ProjectList />
    </Box>
  </Layout>
)

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About

export const query = graphql`
  query WorkQuery {
    workJson {
      title
    }
  }
`
