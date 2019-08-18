import React from 'react'
import {Link} from 'gatsby'
import {Wrapper} from './nav.css'

const Nav = () => (
  <Wrapper>
    <ul>
      <li>
        <Link to="/about">me</Link>
      </li>
      <li>
        <Link to="/work">work</Link>
      </li>
      <li>
        <a href="https://github.com/shwilliam/shwilliam.github.io/tree/dev">
          source
        </a>
      </li>
    </ul>
  </Wrapper>
)

export default Nav
