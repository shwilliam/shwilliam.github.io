import styled from 'styled-components'
import MEDIA from '../../constants/breakpoints'

const StyleWrapper = styled.section`
  border-right: 1px solid black;

  ${MEDIA.PHONE`
    border-right: none;
  `}
`

export default StyleWrapper
