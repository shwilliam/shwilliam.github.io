import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/tachyons.min.css'
import '../styles/global.css'
import '../styles/utilities.css'

import Header from './header'
import ProjectList from './project-list'

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div id="layout" className="sans-serif near-black f4 lh-copy mw8 center bl-l br-l min-vh-100">
          <Header siteTitle={data.site.siteMetadata.title} />
          <main role="main" className="pv2 ph4 fr w-100 w-70-ns relative">
            <article className="pt2 pb4">
              {children}
            </article>
          </main>
          <ProjectList/>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
