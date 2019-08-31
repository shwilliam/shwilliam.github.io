import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import {blue} from 'constants/colors'
import BREAKPOINTS from 'constants/breakpoints'

export const Header = styled.header`
  position: sticky;
  top: 0;
  transition: transform 0.2s ease-in-out;
  z-index: 999;

  &.scrolled {
    transform: translateY(-1.5rem);
  }
`

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HeaderTitle = styled.h1`
  background-color: ${blue};
  color: #fff;
  max-width: ${BREAKPOINTS.DESKTOP}px;
  margin: 0 auto;
  padding: 0.3rem 0.9rem;

  ${MEDIA.MIN_PHONE`
    padding: 0.75rem 1.5rem;
  `}
`
