import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const ProjectActions = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;

  & > * + * {
    width: 82.7px;
    margin-left: 0.75rem;
  }

  ${MEDIA.MIN_PHONE`
    flex-direction: column;

    & > * {
      margin-left: 0;
    }
  `};

  ${MEDIA.MIN_TABLET`
    align-items: center;
    flex-direction: row;
    margin-top: 2.2rem;

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
