import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 4rem 2rem 4rem;

  a {
    text-decoration: none;
    white-space: nowrap;
    color: #757575;

    h1,
    &:hover {
      color: #000;
    }
  }

  [role='img'] {
    margin-right: 0.75rem;
  }

  ${MEDIA.TABLET`
    flex-direction: column;
  `};
`
