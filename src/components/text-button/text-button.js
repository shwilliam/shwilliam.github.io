import styled from 'styled-components'
import { TEXT } from '../../constants/colors'

const TextButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${TEXT.LINK};
  cursor: pointer;

  &.inactive {
    opacity: 0.2;
  }

  &:hover {
    opacity: 1;
    color: ${TEXT.LINK_HOVER};
  }
`

export default TextButton
