import styled from 'styled-components'

export const Footer = styled.footer`
  padding-bottom: 0.2rem;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background: #fcfcfc;
  z-index: 998;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

export const FooterActions = styled.div`
  width: calc(10% + 200px);
  display: flex;
  justify-content: space-between;
`
