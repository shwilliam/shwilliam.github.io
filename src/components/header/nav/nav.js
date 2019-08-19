import React from 'react'
import {Wrapper, NavInternalLink, NavLink} from './nav.css'

const Nav = () => (
  <Wrapper>
    <ul>
      <li>
        <NavInternalLink to="/about">me</NavInternalLink>
      </li>
      <li>
        <NavInternalLink to="/work">work</NavInternalLink>
      </li>
      <li>
        <NavLink href="https://github.com/shwilliam/shwilliam.github.io/tree/dev">
          source
        </NavLink>
      </li>
    </ul>
  </Wrapper>
)

export default Nav
