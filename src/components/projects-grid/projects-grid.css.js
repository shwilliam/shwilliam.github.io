import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const ProjectActions = styled.div`
  position: absolute;
  bottom: 0;
  right: 1.2rem;

  ${MEDIA.MIN_TABLET`
    right: unset;
  `}
`

export const ProjectDescription = styled.div``

export const ProjectsGrid = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  padding: 1rem 0;

  ${MEDIA.MIN_TABLET`
    grid-template-columns: repeat(2, 1fr);
  `}
`

export const ProjectsGridItem = styled.div`
  position: relative;
  padding: 1.2rem 1.2rem 3rem 1.2rem;
  border: 1px solid #f2f2f2;
  overflow: hidden;

  &:not(:last-of-type) {
    border-bottom: none;
  }

  ${MEDIA.MIN_TABLET`
    &:not(:last-of-type) {
      border-bottom: 1px solid #f2f2f2;
    }

    &:nth-child(even) {
      border-left: none;
    }
  `}
`

export const ProjectTitle = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  margin: 0;
`

export const ProjectImageWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
