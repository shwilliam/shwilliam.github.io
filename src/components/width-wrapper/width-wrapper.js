import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

const WidthWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-right: 1.5rem;
  padding-left: 1.5rem;

  ${MEDIA.MIN_TABLET`
    padding-right: 3rem;
    padding-left: 3rem;
  `};

  ${MEDIA.MIN_DESKTOP`
    padding-right: 4rem;
    padding-left: 4rem;
  `};
`

export default WidthWrapper
