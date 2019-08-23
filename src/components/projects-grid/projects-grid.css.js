import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const ProjectsGrid = styled.div`
  display: grid;
  grid-auto-flow: row dense;

  ${MEDIA.MIN_TABLET`
    grid-template-columns: repeat(2, 1fr);
  `}
`

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: row;

  ${MEDIA.MIN_TABLET`
    flex-direction: column-reverse;
  `}
`
