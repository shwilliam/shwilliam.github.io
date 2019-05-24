import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import '../styles/tachyons.min.css'
import '../styles/global.css'
import '../styles/utilities.css'

import MEDIA from '../constants/breakpoints'

import Header from './header'
import ProjectList from './project-list'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-template-areas:
    "sider main";

  ${MEDIA.PHONE`
    grid-template-columns: none;
    grid-template-areas:
      "main"
      "sider";
  `}
`

const GridMain = styled.div`
  grid-area: main;

  // override grid item default min-width auto
  min-width: 0;
`

const GridSider = styled.div`
  grid-area: sider;
`

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
        <div id="layout" className="sans-serif near-black f4 lh-copy mw8 center bl-l br-l cf min-vh-100">
          <Header siteTitle={data.site.siteMetadata.title} />
          <Grid>
            <GridMain className="pv2-ns ph4">
              <main>
                <article className="pt2-ns pb4-ns">
                  {children}
                </article>
              </main>
            </GridMain>
            <GridSider>
              <ProjectList/>
            </GridSider>
          </Grid>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
