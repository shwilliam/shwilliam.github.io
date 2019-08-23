import React from 'react'
import {StyledNav, StyledInternalLink, StyledLink} from './nav.css'

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <StyledInternalLink to="/about">me</StyledInternalLink>
      </li>
      <li>
        <StyledInternalLink to="/work">work</StyledInternalLink>
      </li>
      <li>
        <StyledLink href="https://github.com/shwilliam/shwilliam.github.io">
          source
        </StyledLink>
      </li>
    </ul>
  </StyledNav>
)

export default Nav
