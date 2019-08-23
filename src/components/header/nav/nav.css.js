import styled from 'styled-components'
import {Link} from 'gatsby'

export const StyledNav = styled.nav`
  ul {
    display: flex;

    li + li {
      margin-left: 1.5rem;
    }
  }
`

export const StyledInternalLink = styled(Link)`
  padding: 0.75rem;
`

export const StyledLink = styled.a`
  padding: 0.75rem;
`
