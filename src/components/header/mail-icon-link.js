import React from 'react'
import styled from 'styled-components'
import MEDIA from '../../constants/breakpoints'
import Emoji from '../emoji'

const Link = styled.a`
  position: absolute;
  right: 0;
  padding: 1.4rem 1rem 1rem 1rem;

  display: none;
  ${MEDIA.PHONE`
    display: inline-block;
  `}
`

const MailIconLink = () => (
  <Link href="mailto:w-lindvall@outlook.com">
    <Emoji label="mail">📧</Emoji>
  </Link>
)

export default MailIconLink
