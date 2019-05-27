import styled from 'styled-components'
import {TEXT} from '../../constants/colors'

const TextButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${TEXT.LINK.COLOR};
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`

export default TextButton
