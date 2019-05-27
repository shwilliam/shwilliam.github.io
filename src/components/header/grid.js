import styled from 'styled-components'
import MEDIA from '../../constants/breakpoints'

const Grid = styled.header`
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-template-areas:
    'logo header'
    'filters search';

  ${MEDIA.PHONE`
    grid-template-columns: none;
    grid-template-areas:
      "logo"
      "filters"
      "search";
  `}
`

export default Grid

export const GridLogo = styled.section`
  grid-area: logo;
  min-width: 0;
  border-bottom: 1px solid black;
`

export const GridHeader = styled.section`
  grid-area: header;
  border-bottom: 1px solid black;
  text-align: right;
`

export const GridFilters = styled.section`
  grid-area: filters;
  min-width: 0;
  border-bottom: 1px solid black;
`

export const GridSearch = styled.section`
  grid-area: search;
  height: 2.7rem;
  border-bottom: 1px solid black;
`
