import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.header`
  padding-top: 2.5rem;
  position: sticky;
  top: 0;
  height: 9rem;
  background-color: #fff;
  transition: all 0.2s ease-in-out;

  &.scrolled {
    padding-top: 1.5rem;
    height: 8rem;
    margin-bottom: 2rem;
    box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
  }

  ${MEDIA.MIN_TABLET`
    height: 8rem;
    &.scrolled {
      height: 6rem;
      margin-bottom: 2rem;
    }
  `};
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    white-space: nowrap;
    color: #757575 !important;

    h1,
    &:hover {
      color: #000 !important;
    }
  }

  [role='img'] {
    margin-right: 0.75rem;
  }

  ${MEDIA.TABLET`
    flex-direction: column;
  `};
`
