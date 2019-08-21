import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Wrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 3rem;
  max-width: 1000px;

  ${MEDIA.MIN_TABLET`
    padding-top: 2rem;
    padding-bottom: 5rem;
  `};
`

export const WrapperCenter = styled(Wrapper)`
  margin: 0 auto;
`

export const WrapperFlexReverse = styled(Wrapper)`
  ${MEDIA.MIN_TABLET`
    display: flex;
    flex-direction: column-reverse;

    * {
      padding-top: 0;
      padding-bottom: 1rem;
    }
  `};
`

export const WrapperNoWrap = styled.span`
  white-space: nowrap;
`
