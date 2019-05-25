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

const StylesWrapper = styled.div`
  color: ${TEXT.PRIMARY};
  background-color: ${UI.WHITE};
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  border: 1px solid ${UI.PRIMARY};

  a {
    color: ${TEXT.LINK};
  }

  a:visited {
    color: ${TEXT.LINK_VISITED};
  }

  a:hover {
    color: ${TEXT.LINK_HOVER};
    text-decoration: none;
  }

  ${MEDIA.TABLET`
    border: 1px solid transparent;
  `}
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
  min-width: 0;
  padding: 0 2.5rem;

  ${MEDIA.PHONE`
    padding: 0 2rem;
  `}
`

const GridSider = styled.div`
  grid-area: sider;
  min-width: 0;
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
        <StylesWrapper>
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
        </StylesWrapper>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
