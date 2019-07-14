import styled from 'styled-components'

export const Container = styled.nav`
  ul {
    display: flex;

    li {
      text-transform: uppercase;

      & + li {
        margin-left: 3rem;
      }
    }
  }
`
