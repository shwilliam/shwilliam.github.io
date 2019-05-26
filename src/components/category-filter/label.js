import styled from 'styled-components'
import MEDIA from '../../constants/breakpoints'

const Label = styled.label`
  display: inline-block;
  padding: 0.7rem 0rem 0.7rem 1rem;
  float: left;

  ${MEDIA.TABLET`
    display: none;
  `}
`

export default Label
