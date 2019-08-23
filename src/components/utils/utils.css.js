import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const WrapperCenter = styled.div`
  margin: 0 auto;
`

export const WrapperFlexReverse = styled.div`
  ${MEDIA.MIN_TABLET`
    display: flex;
    flex-direction: column-reverse;

    * {
      padding-top: 0;
      padding-bottom: 1rem;
    }
  `};
`

export const WrapperFlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

export const WrapperNoWrap = styled.span`
  white-space: nowrap;
`

export const WrapperSROnly = styled.span`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  left: -9999px;
`

export const WrapperDim = styled.span`
  &.dim {
    opacity: 0.5;
  }
`
