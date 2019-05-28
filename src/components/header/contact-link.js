import React from 'react'
import styled from 'styled-components'
import {TEXT} from '../../constants/colors'

const Link = styled.a`
  display: inline-block;
  padding: 1.4rem 1rem 1rem 1rem;
  color: ${TEXT.PRIMARY.INVERSE} !important;
`

const ContactLink = ({children}) => (
  <Link href="mailto:w-lindvall@outlook.com">{children}</Link>
)

export default ContactLink
