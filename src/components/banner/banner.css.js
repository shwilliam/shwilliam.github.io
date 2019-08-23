import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${MEDIA.MIN_TABLET`
    // height: 55vh;
    display: flex;
    align-items: center;
  `}
`
