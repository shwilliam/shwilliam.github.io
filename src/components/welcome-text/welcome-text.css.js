import styled from 'styled-components'
import {Text} from '../title/title.css'

export const TextContent = styled(Text)`
  margin-top: 4rem;

  > * {
    margin-bottom: 2rem;

    &:last-of-type {
      margin-bottom: 1.5rem;
    }
  }

  > *:first-child {
    font-size: 1.3em;
  }
`
