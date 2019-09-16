import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li + li {
      margin-left: 1.5rem;
    }

    li:first-child > * {
      padding-left: 0.1rem;
    }

    ${MEDIA.MIN_TABLET`
      li:first-child > * {
        padding-left: 0.75rem;
      }
    `}
  }
`
