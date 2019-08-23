import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const ProjectActions = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > * {
    width: 100%;
    margin-left: 0;
  }

  ${MEDIA.MIN_TABLET`
    flex-direction: row;

    & > * {
      margin-left: 0.75rem;
    }
  `};
`

export const ProjectContent = styled.div`
  margin-top: 11px;
  margin-bottom: 22px;
  margin-right: 3rem;

  ${MEDIA.MIN_TABLET`
    margin-right: 6rem;
  `};
`

export const ProjectTitle = styled.h3`
  ${MEDIA.MIN_PHONE`
    display: inline-block;
  `}
`
