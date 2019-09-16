import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    font-weight: 600;

    li + li {
      margin-left: 0;
    }

    li:first-child > * {
      padding-left: 0.1rem;
    }

    ${MEDIA.MIN_PHONE`
      li + li {
        margin-left: 1.5rem;
      }
    `}

    ${MEDIA.MIN_TABLET`
      li:first-child > * {
        padding-left: 0.75rem;
      }
    `}
  }
`
