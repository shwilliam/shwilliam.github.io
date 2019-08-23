import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 0;

  ${MEDIA.MIN_PHONE`
    margin-right: 3rem;
  `}

  ${MEDIA.MIN_TABLET`
    // height: 55vh;
    display: flex;
    margin-right: 35%;
  `}
`

export const WrapperHeading = styled.p`
  font-size: 36px;
  font-weight: bold;
`

export const WrapperSubheading = styled.p`
  font-size: 18px;
`
