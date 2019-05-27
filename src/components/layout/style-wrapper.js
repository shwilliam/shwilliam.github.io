import styled from 'styled-components'
import {TEXT, UI} from '../../constants/colors'
import MEDIA from '../../constants/breakpoints'

const StyleWrapper = styled.div`
  color: ${TEXT.PRIMARY.COLOR};
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${UI.BG};

  a {
    color: ${TEXT.LINK.COLOR};
  }

  a:visited {
    color: ${TEXT.LINK.VISITED};
  }

  a:hover {
    color: ${TEXT.LINK.HOVER};
    text-decoration: none;
  }

  ${MEDIA.TABLET`
    border: none;
  `}
`

export default StyleWrapper
