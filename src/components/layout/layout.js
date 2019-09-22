import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import Head from 'containers/head'
import {WidthWrapper, WIP} from 'components/utils'
import Header from 'components/header'
import Footer from 'components/footer'
import {Layout as LayoutStyled} from './layout.css'

import 'styles/reset.css'
import 'styles/fonts.css'

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
