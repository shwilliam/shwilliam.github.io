import React from 'react'
import {
  Nav as NavStyled,
  InternalLink as InternalLinkStyled,
  LinkStyled,
} from './nav.css'

const Nav = () => (
  <NavStyled>
    <ul>
      <li>
        <InternalLinkStyled to="/about">me</InternalLinkStyled>
      </li>
      <li>
        <InternalLinkStyled to="/work">work</InternalLinkStyled>
      </li>
      <li>
        <LinkStyled href="https://github.com/shwilliam/shwilliam.github.io">
          source
        </LinkStyled>
      </li>
    </ul>
  </NavStyled>
)

export default Nav
