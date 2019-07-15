import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.div`
  padding: 2rem 4rem;
  max-width: 1000px;

  ${MEDIA.TABLET`
    padding: 2rem 2rem;
  `};
`

export const ContainerCenter = styled(Container)`
  margin: 0 auto;
`
