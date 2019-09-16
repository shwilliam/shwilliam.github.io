import styled from 'styled-components'
import BREAKPOINTS from 'constants/breakpoints'
import MEDIA from 'helpers/mediaTemplates'

const WidthWrapper = styled.div`
  max-width: ${BREAKPOINTS.DESKTOP}px;
  margin: 0 auto;
  padding-left: 0.75rem;
  padding-right: 0.75rem;

  ${MEDIA.MIN_PHONE`
    padding-left: 2.2rem;
    padding-right: 2.2rem;
  `}

  ${MEDIA.MIN_TABLET`
    padding-left: 3rem;
    padding-right: 3rem;
  `}
`

export default WidthWrapper
