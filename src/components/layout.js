import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import '../styles/tachyons.min.css'
import '../styles/index.css'
import '../styles/utilities.css'

import MEDIA from '../constants/breakpoints'
import { TEXT, UI } from '../constants/colors'

import Header from './header'
import ProjectList from './project-list'

const LayoutWrapper = styled.div`
  font-family: ;
  color: ${TEXT.PRIMARY};
  background-color: ${UI.WHITE};
  line-height: ;
  max-width: ;
  min-height: 100vh;
`

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
        <LayoutWrapper id="layout" className="bl-l br-l">
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
        </LayoutWrapper>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
