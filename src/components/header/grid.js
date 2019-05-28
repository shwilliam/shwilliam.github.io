import styled from 'styled-components'
import MEDIA from '../../constants/breakpoints'
import {TEXT, UI} from '../../constants/colors'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-template-rows: 4rem 2rem;
  grid-template-areas:
    'logo header'
    'filters search';

  ${MEDIA.PHONE`
    grid-template-columns: none;
    grid-template-rows: 4rem 2rem 2rem;
    grid-template-areas:
      'logo'
      'filters'
      'search';
  `}
`

export default Grid

export const GridLogo = styled.section`
  grid-area: logo;
  min-width: 0;
  border-bottom: 1px solid black;
  background-color: ${UI.INTERACTIVE.PRIMARY.BG.COLOR};
`

export const GridHeader = styled.section`
  min-width: 0;
  border-bottom: 1px solid black;
  text-align: right;
  background-color: ${UI.INTERACTIVE.PRIMARY.BG.COLOR};

  ${MEDIA.PHONE`
    display: none;
  `}
`

export const GridFilters = styled.section`
  grid-area: filters;
  min-width: 0;
  border-bottom: 1px solid black;
`

export const GridSearch = styled.section`
  grid-area: search;
  border-bottom: 1px solid black;
`
