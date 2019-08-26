import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const BlogList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const BlogListItem = styled.li`
  &:hover {
    opacity: 0.5;
  }
`

export const BlogListTitle = styled.h3`
  ${MEDIA.MIN_TABLET`
    display: inline-block;
  `}
`

export const BlogListDate = styled.div`
  ${MEDIA.MIN_TABLET`
    display: inline-block;
  `}
`
