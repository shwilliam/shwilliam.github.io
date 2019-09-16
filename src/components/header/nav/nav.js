import React from 'react'
import {InternalLink as InternalLinkStyled, Link} from '../../utils'
import {Nav as NavStyled} from './nav.css'

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
        <InternalLinkStyled to="/blog">blog</InternalLinkStyled>
      </li>
      <li>
        <Link href="https://github.com/shwilliam/shwilliam.github.io">
          source
        </Link>
      </li>
    </ul>
  </NavStyled>
)

export default Nav
