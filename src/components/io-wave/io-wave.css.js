import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 4rem;
  position: relative;
  text-align: center;
  transition: transform 0.3s ease;

  transform: ${({isVisible}) =>
    isVisible ? 'translate(0, 0px)' : 'translate(0, 200px)'};
`
