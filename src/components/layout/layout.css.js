import styled from 'styled-components'
import {blue} from 'constants/colors'

export const Layout = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: calc(100vh - 2rem);
  overflow-x: hidden;
  overflow-y: scroll;
  border: 1px solid ${blue};
  margin: 1rem;
`
