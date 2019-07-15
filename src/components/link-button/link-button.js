import React from 'react'
import PropTypes from 'prop-types'
import {StyledLink, StyledGatsbyLink} from './link-button.css'

const LinkButton = ({children, ...props}) => (
  <StyledLink {...props}>{children}</StyledLink>
)

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
}

export const GatsbyLinkButton = ({children, ...props}) => (
  <StyledGatsbyLink {...props}>{children}</StyledGatsbyLink>
)

GatsbyLinkButton.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LinkButton
