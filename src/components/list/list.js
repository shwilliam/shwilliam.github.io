import styled from 'styled-components'

const List = styled.ul`
  margin-left: 0;
  padding-left: 0;
  text-indent: 0;

  li {
    margin: 0;
  }

  li::before {
    content: '';
  }
`

export default List
