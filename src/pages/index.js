import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`home`]} />
    <h2>
      Select a project <span className="dn di-ns">from the left</span><span className="dn-ns di">below</span> to get started...
    </h2>
  </Layout>
)

export default IndexPage
