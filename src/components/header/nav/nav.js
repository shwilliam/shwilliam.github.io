import React from 'react'
import {Link} from 'gatsby'
import {Wrapper} from './nav.css'

const Nav = () => (
  <Wrapper>
    <ul>
      <li>
        <Link to="/about">Me</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
      <li>
        <a href="https://github.com/shwilliam/shwilliam.github.io/tree/dev">
          Source
        </a>
      </li>
    </ul>
  </Wrapper>
)

export default Nav
