import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'
import Head from 'components/head'
import Header from 'components/header'
import Footer from 'components/footer'
import WidthWrapper from 'components/width-wrapper'
import {Layout as LayoutStyled} from './layout.css'

import 'styles/reset.css'
import 'styles/fonts.css'

// FIXME: remove wip note
const WIP = styled.p`
  background-color: red;
  color: #fff;
  font-weight: 800;
  position: fixed;
  top: 0;
  right: 1rem;
  padding: 0.3rem 0.5rem;
  z-index: 99999;
`

const Layout = ({data, children}) => (
  <LayoutStyled>
    <Head />
    <WIP>Work in progress</WIP>
    <Header title={data.site.siteMetadata.siteTitle} />
    <WidthWrapper>{children}</WidthWrapper>
    <Footer />
  </LayoutStyled>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
}

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutWithQuery
