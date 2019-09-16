import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import {Link} from 'gatsby'

export const Center = styled.div`
  margin: 0 auto;
`

export const VPadded = styled.span`
  display: inline-block;
  margin-top: 0.75rem;
  margin-bottom: 3rem;
`

export const FlexReverse = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  & > * + * {
    margin-top: 1.5rem;
  }

  ${MEDIA.MIN_TABLET`
    flex-direction: row-reverse;

    & > * + * {
      margin-top: 0;
      margin-right: 4.5rem;
    }
  `};

  ${MEDIA.MIN_DESKTOP`
    margin-top: 6rem;

    & > * + * {
      margin-top: 3rem;
    }
  `};
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
