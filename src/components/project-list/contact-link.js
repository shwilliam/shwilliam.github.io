import styled from 'styled-components'
import {TEXT, UI} from '../../constants/colors'

const ContactLink = styled.a`
  display: block;
  color: ${TEXT.LINK.COLOR};
  padding-top: 1rem;
  white-space: nowrap;

  &.active {
    border-left: 0.2rem solid ${UI.INTERACTIVE.FOCUS.BORDER};
  }
`

export default ContactLink
