import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const ProjectsGrid = styled.div`
  display: grid;
  grid-gap: 44px;
  grid-auto-flow: row dense;
  margin-top: 0.75rem;

  ${MEDIA.MIN_TABLET`
    grid-template-columns: repeat(2, 1fr);
  `}
`

export const ProjectLink = styled.a`
  &:hover {
    opacity: 0.5;
  }
`

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column-reverse;

  ${MEDIA.MIN_PHONE`
    flex-direction: row;
  `}

  ${MEDIA.MIN_TABLET`
    flex-direction: column-reverse;
  `}
`

export const ProjectTitle = styled.h3`
  white-space: nowrap;
  margin-top: 0.4rem;

  ${MEDIA.MIN_PHONE`
    margin-top: 0;
  `}
`
