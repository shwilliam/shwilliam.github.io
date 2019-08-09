import styled from 'styled-components'
import {Text} from '../title/title.css'

export const TextContent = styled(Text)`
  margin: 4rem 0 3rem 0;

  > * {
    margin-bottom: 2rem;
  }

  > *:first-child {
    font-size: 1.3em;
  }
`
