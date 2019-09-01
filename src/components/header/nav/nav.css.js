import styled from 'styled-components'
import {Link} from 'gatsby'
import {blue, white} from 'constants/colors'

export const Nav = styled.nav`
  height: 100%;
  flex-grow: 1;
  border-bottom: 1px solid ${blue};
  background-color: ${white};

  ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
    padding: 0;

    li + li {
      margin-left: 1.5rem;
    }
  }
`

export const InternalLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem;
  color: ${blue} !important;
`

export const LinkStyled = styled.a`
  display: inline-block;
  padding: 0.75rem;
  color: ${blue} !important;
`
