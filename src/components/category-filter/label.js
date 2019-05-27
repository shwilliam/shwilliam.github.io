import styled from 'styled-components'
import MEDIA from '../../constants/breakpoints'

const Label = styled.label`
  display: inline-block;
  float: left;
  padding: 0.2rem 1rem;

  ${MEDIA.TABLET`
    display: none;
  `}
`

export default Label
