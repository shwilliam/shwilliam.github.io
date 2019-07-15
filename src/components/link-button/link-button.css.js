import styled from 'styled-components'

export const Button = styled.a`
  display: inline-block;
  -webkit-appearance: none;
  background-color: #fff;
  color: #757575 !important;
  border: 1px solid rgba(27, 31, 35, 0.35);
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.333;
  vertical-align: top;
  text-align: bottom;
  margin: 0 0 0.13rem 0;
  padding: 5px 10px;
  transition: 0.2s background-color ease;
  text-decoration: none;

  &:active,
  &:hover,
  &:focus {
    text-decoration: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    background-color: #f9f9f9;
  }
`
