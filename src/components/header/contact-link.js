import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  display: inline-block;
  padding: 1rem;
`

const ContactLink = ({children}) => (
  <Link href="mailto:w-lindvall@outlook.com">{children}</Link>
)

export default ContactLink
