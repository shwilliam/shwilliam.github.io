import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import Head from 'components/head'
import Header from 'components/header'
import WidthWrapper from 'components/width-wrapper'

import 'styles/reset.css'
import 'styles/fonts.css'

const Layout = ({data, children}) => (
  <>
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
    <WidthWrapper>{children}</WidthWrapper>
  </>
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
