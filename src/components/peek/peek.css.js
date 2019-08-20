import styled from 'styled-components'

export const Wrapper = styled.div`
  transition: margin-bottom 0.4s ease-in-out;

  &,
  * {
    height: 300px;
    text-align: center;
  }

  &:not(:hover) {
    margin-bottom: ${({isOpen}) => (isOpen ? '0' : '-230px')};
  }
`
