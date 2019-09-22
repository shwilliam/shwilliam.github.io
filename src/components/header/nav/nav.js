import React from 'react'
import {InternalLink, Link} from '../../utils'
import {Nav as NavStyled} from './nav.css'

const Nav = () => (
  <NavStyled>
    <ul>
      <li>
        <InternalLink to="/about">me</InternalLink>
      </li>
      <li>
        <InternalLink to="/work">work</InternalLink>
      </li>
      <li>
        <InternalLink to="/blog">blog</InternalLink>
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
