import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/tachyons.min.css'

import Header from './header'

const Layout = ({ children }) => (
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
      <div className="sans-serif near-black">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main role="main">
          {children}
        </main>
        <footer>
          <a className="link" href="http://shwilliam.github.io/" target="_blank" rel="noopener noreferrer">@shwilliam</a>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
