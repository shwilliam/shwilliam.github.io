import styled from 'styled-components'
import MEDIA from '../../constants/breakpoints'

const MailIconLink = styled.a`
  display: none;
  position: absolute;
  right: 0;
  top: 0.75rem;
  padding: 1rem;

  ${MEDIA.PHONE`
    display: inline-block;
  `}
`

export default MailIconLink
