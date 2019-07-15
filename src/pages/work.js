import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from 'components/layout'
import {BoxCenter} from 'components/box'
import Head from 'components/head'
import Title from 'components/title'
import ProjectList from 'components/project-list'

const About = ({data}) => (
  <Layout>
    <Head pageTitle={data.workJson.title} />
    <BoxCenter>
      <Title as="h2">Open Source Projects</Title>
      <ProjectList />
    </BoxCenter>
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
