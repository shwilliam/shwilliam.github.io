import React from 'react'
import {Link} from 'gatsby'
import {Container} from './nav.css'

const Nav = () => (
  <Container>
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
  </Container>
)

export default Nav
