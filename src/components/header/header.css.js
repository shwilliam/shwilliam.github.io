import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Header = styled.header`
  padding-top: 2.5rem;
  padding-bottom: 1rem;
  position: sticky;
  top: 0;
  background: #fcfcfc;
  z-index: 999;
  transition: transform 0.2s ease-in-out;

  &.scrolled {
    transform: translateY(-1.5rem);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  ${MEDIA.MIN_TABLET`
    padding-top: 3rem;
  `};
`

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  ${MEDIA.MIN_TABLET`
    flex-direction: row;
    align-items: center;
  `};
`
