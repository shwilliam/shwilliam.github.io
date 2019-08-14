import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Wrapper = styled.header`
  padding-top: 2.6rem;
  position: sticky;
  top: 0;
  height: 10rem;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  z-index: 999;

  &.scrolled {
    padding-top: 1.6rem;
    height: 9rem;
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

export const FlexWrapper = styled.div`
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
