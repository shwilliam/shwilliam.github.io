import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import '../../styles/index.css'
import '../../styles/utilities.css'
import Dots from '../dots'
import Header from '../header'
import ProjectList from '../project-list'
import StyleWrapper from './style-wrapper'
import Grid, { GridMain, GridSider } from './Grid'

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
        <StyleWrapper>
          <Dots />
          <Header siteTitle={data.site.siteMetadata.title} />
          <Grid>
            <GridMain>
              <main>
                <article>
                  {children}
                </article>
              </main>
            </GridMain>
            <GridSider>
              <ProjectList/>
            </GridSider>
          </Grid>
        </StyleWrapper>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Layout
