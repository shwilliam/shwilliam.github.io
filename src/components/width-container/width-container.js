import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

const WidthContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-right: 1rem;
  padding-left: 1rem;

  ${MEDIA.MIN_TABLET`
    padding-right: 2rem;
    padding-left: 2rem;
  `};

  ${MEDIA.MIN_DESKTOP`
    padding-right: 4rem;
    padding-left: 4rem;
  `};
`

export default WidthContainer
