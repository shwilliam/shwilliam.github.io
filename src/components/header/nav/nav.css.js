import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Wrapper = styled.nav`
  ul {
    display: flex;

    ${MEDIA.TABLET`
      margin-top: 1rem;
    `};

    li + li {
      margin-left: 3rem;
    }
  }
`
