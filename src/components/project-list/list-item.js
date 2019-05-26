import styled from 'styled-components'
import MEDIA from '../../constants/breakpoints'
import { UI } from '../../constants/colors'

const ListItem = styled.li`
  background-color: ${UI.GREY};
  border-top: 1px solid black;

  &:first-of-type {
    border-top: none;
  }

  ${MEDIA.PHONE`
    &:first-of-type {
      border-top: 1px solid black;
    }
  `}

  &:last-of-type {
    border-bottom: 1px solid black;
  }

  a {
    display: inline-block;
    padding: 1rem;
    width: 100%;

    &.active {
      border-left: 0.2rem solid ${UI.FOCUS};
    }
  }
`

export const NoResultsListItem = styled.li`
  padding: 1rem;
  background-color: ${UI.GREY};
  border-top: none;
  border-bottom: 1px solid black;
`

export default ListItem
