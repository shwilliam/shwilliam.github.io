import styled from 'styled-components'
import { UI } from '../../constants/colors'

const SearchQuery = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${UI.INTERACTIVE.PRIMARY.BG.COLOR};
  color: ${UI.INTERACTIVE.PRIMARY.TEXT.COLOR};
  padding: 0.4rem 1rem;
  border-bottom: 1px solid black;
`

export default SearchQuery
