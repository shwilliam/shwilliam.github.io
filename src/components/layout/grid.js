import styled from 'styled-components'
import MEDIA from '../../constants/breakpoints'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-template-areas: 'sider main';

  ${MEDIA.PHONE`
    grid-template-columns: none;
    grid-template-areas:
      "main"
      "sider";
  `}
`

export default Grid

export const GridMain = styled.div`
  grid-area: main;
  min-width: 0;
  padding: 0 2.5rem;

  ${MEDIA.PHONE`
    padding: 0 2rem;
  `}
`

export const GridSider = styled.div`
  grid-area: sider;
  min-width: 0;
`
