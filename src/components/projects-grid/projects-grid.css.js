import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const ProjectActions = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
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
  padding: 1.2rem;
  border: 1px solid #f2f2f2;

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
  display: inline-block;
  font-size: 1rem;
  font-weight: 800;
  margin: 0;
  padding-right: 1rem;
`

export const ProjectImageWrapper = styled.div`
  height: 80%;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
