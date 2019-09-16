import styled from 'styled-components'

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li + li {
      margin-left: 1.5rem;
    }
  }
`
