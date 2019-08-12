import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import Head from 'components/head'
import Header from 'components/header'
import WidthContainer from 'components/width-container'
import 'styles/reset.css'

const Layout = ({data, children}) => (
  <>
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
    <WidthContainer>{children}</WidthContainer>
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
