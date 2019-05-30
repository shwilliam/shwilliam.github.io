import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {TEXT} from '../../constants/colors'

const Link = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
  color: ${TEXT.PRIMARY.INVERSE} !important;
`

const ContactLink = ({children}) => (
  <Link href="mailto:w-lindvall@outlook.com">{children}</Link>
)

ContactLink.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContactLink
