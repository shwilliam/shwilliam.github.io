import styled from 'styled-components'
import {TEXT, UI} from '../../constants/colors'
import TextButton from '../text-button'

const ClearButton = styled(TextButton)`
  color: ${TEXT.PRIMARY.INVERSE};

  &:hover {
    color: ${UI.INTERACTIVE.PRIMARY.TEXT.HOVER};
  }
`

export default ClearButton
