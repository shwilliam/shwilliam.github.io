import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.div`
  padding-top: 1rem;
  padding-bottom: 3rem;
  max-width: 1000px;

  ${MEDIA.MIN_TABLET`
    padding-top: 2rem;
    padding-bottom: 5rem;
  `};
`

export const ContainerCenter = styled(Container)`
  margin: 0 auto;
`
