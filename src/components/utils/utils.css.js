import styled from 'styled-components'
import {Link} from 'gatsby'
import BREAKPOINTS from 'constants/breakpoints'
import MEDIA from 'helpers/mediaTemplates'

export const WidthWrapper = styled.div`
  max-width: ${BREAKPOINTS.DESKTOP}px;
  margin: 0 auto;
  padding-left: 1.2rem;
  padding-right: 1.2rem;

  ${MEDIA.MIN_PHONE`
    padding-left: 2.2rem;
    padding-right: 2.2rem;
  `}

  ${MEDIA.MIN_TABLET`
    padding-left: 3rem;
    padding-right: 3rem;
  `}
`

export const Center = styled.div`
  margin: 0 auto;
`

export const NoWrap = styled.span`
  white-space: nowrap;
`

export const SROnly = styled.span`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  left: -9999px;
`

export const Dim = styled.span`
  &.dim {
    opacity: 0.7;
  }
`

export const Markdown = styled.div`
  a {
    text-decoration: underline;
  }

  h2 {
    text-decoration: none;
  }

  h3 {
    margin-top: 3rem;
  }
`

export const LinkStyled = styled.a`
  padding: 0.75rem;
  white-space: nowrap;

  &:hover {
    opacity: 0.7;
  }
`

export const InternalLink = styled(Link)`
  padding: 0.75rem;
  white-space: nowrap;

  &:hover {
    opacity: 0.7;
  }
`

export const WIP = styled.p`
  background-color: red;
  color: #fff;
  font-weight: 800;
  position: fixed;
  top: 0;
  right: 1rem;
  padding: 0.3rem 0.5rem;
  z-index: 99999;
`
