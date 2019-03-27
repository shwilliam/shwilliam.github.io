import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`home`]} />
    <h2 className="dib-ns dn">
      Select a project from the left to get started...
    </h2>
  </Layout>
)

export default IndexPage
