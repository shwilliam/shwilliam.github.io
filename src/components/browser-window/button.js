import styled from 'styled-components'

const Button = styled.span`
  &:before {
    content: '';
    position: relative;
    display: inline-block;
    width: 7px;
    height: 7px;
    top: -4px;
    left: 8px;
    margin: 0 2.8px;
    border-radius: 7px;
    background-color: darkgray;
  }
`

export default Button
