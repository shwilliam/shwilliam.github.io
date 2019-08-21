import styled from 'styled-components'

export const Wrapper = styled.div`
  transition: margin-bottom 0.4s ease-in-out;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > * {
    margin: 0 auto;
    // TODO: maintain aspect ratio on small window
    min-height: 260px;
  }

  &:not(:hover) {
    margin-bottom: ${({isOpen}) => (isOpen ? '0' : '-230px')};
  }
`
