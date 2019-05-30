import styled from 'styled-components'
import {TEXT} from '../../constants/colors'

const Title = styled.h1`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 1.7rem;
  font-weight: 800;
  color: ${TEXT.PRIMARY.INVERSE};
  margin: 0;
  white-space: nowrap;
  padding: 1.4rem 1rem 1rem 1rem;
  z-index: 1;
`

export default Title
