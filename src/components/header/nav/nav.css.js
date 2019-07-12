import styled from 'styled-components'

export const Container = styled.nav`
  ul {
    display: flex;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`
