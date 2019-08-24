import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Header = styled.header`
  padding-top: 3rem;
  padding-bottom: 1rem;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 999;
  transition: transform 0.2s ease-in-out;

  &.scrolled {
    transform: translateY(-1.5rem);
    box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
  }
`

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  ${MEDIA.MIN_TABLET`
    flex-direction: row;
  `};
`
