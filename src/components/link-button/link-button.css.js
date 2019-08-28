import styled from 'styled-components'
import {Link} from 'gatsby'

export const LinkStyled = styled.a`
  font-size: 12px;
  display: inline-block;
  -webkit-appearance: none;
  background-color: transparent;
  color: #757575 !important;
  border: 1px solid rgba(27, 31, 35, 0.35);
  border-radius: 0.25rem;
  cursor: pointer;
  line-height: 1.333;
  vertical-align: top;
  text-align: center;
  margin: 0 0 0.38rem 0;
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

export const GatsbyLink = styled(Link)`
  font-size: 12px;
  display: inline-block;
  -webkit-appearance: none;
  background-color: transparent;
  color: #757575 !important;
  border: 1px solid rgba(27, 31, 35, 0.35);
  border-radius: 0.25rem;
  cursor: pointer;
  line-height: 1.333;
  vertical-align: top;
  text-align: center;
  padding: 5px 10px;
  margin-top: 1.5rem;
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
