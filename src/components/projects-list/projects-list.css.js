import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const ProjectActions = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  & > * {
    margin-left: 0.5rem;
  }

  ${MEDIA.TABLET`
    flex-direction: column;

    & > * {
      width: 100%;
      margin-left: 0;
    }
  `};
`

export const ProjectContent = styled.div`
  margin-right: 2rem;

  ${MEDIA.TABLET`
    margin-right: 1rem;
  `};
`

export const ProjectDescription = styled.div``

export const ProjectList = styled.ul`
  width: 100%;
  text-align: left;
`

export const ProjectListItem = styled.li`
  padding: 1.2rem 0 1.5rem 0;
  overflow: hidden;

  &:not(:last-child) {
    border-bottom: 2px solid #f2f2f2;
  }

  &.dim {
    opacity: 0.5;
  }
`

export const ProjectTitle = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  margin: 0;
  padding-right: 0.5rem;
  padding-bottom: 0.5rem;

  ${MEDIA.MIN_PHONE`
    display: inline-block;
  `}
`

export const ProjectFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
