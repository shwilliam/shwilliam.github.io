import styled from 'styled-components'
import {Link} from 'gatsby'

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li + li {
      margin-left: 1.5rem;
    }
  }
`

export const InternalLink = styled(Link)`
  padding: 0.75rem;
`

export const LinkStyled = styled.a`
  padding: 0.75rem;
`
