import styled from 'styled-components'
import {Link} from 'gatsby'
import MEDIA from 'helpers/mediaTemplates'

export const Wrapper = styled.nav`
  ul {
    display: flex;

    li {
      ${MEDIA.MIN_TABLET`
        margin-top: 0.8rem;
    `};
    }

    li + li {
      margin-left: 2rem;
    }
  }
`

export const NavInternalLink = styled(Link)`
  padding: 0.4rem;
`

export const NavLink = styled.a`
  padding: 0.4rem;
`
