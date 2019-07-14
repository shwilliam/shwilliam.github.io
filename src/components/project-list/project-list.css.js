import styled from 'styled-components'
import {Link} from 'gatsby'

export const ProjectActions = styled.div`
  & > * {
    margin-left: 0.5rem;
  }
`

export const ProjectLink = styled(Link)`
  text-decoration: none;
`

export const ProjectList = styled.ul`
  width: 100%;
  text-align: left;
`

export const ProjectListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;

  &:not(:last-child) {
    border-bottom: 2px solid #f2f2f2;
  }
`

export const ProjectTitle = styled.h2`
  font-size: 1rem;
  font-weight: 800;
  flex-grow: 1;
`
