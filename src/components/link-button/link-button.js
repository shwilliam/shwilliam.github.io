import React from 'react'
import PropTypes from 'prop-types'
import {LinkStyled, GatsbyLink} from './link-button.css'

const LinkButton = ({children, ...props}) => (
  <LinkStyled {...props}>{children}</LinkStyled>
)

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
}

export const GatsbyLinkButton = ({children, ...props}) => (
  <GatsbyLink {...props}>{children}</GatsbyLink>
)

GatsbyLinkButton.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LinkButton
