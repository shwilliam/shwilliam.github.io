import styled from 'styled-components'
import {TextStyles} from 'components/title'

export const TextContent = styled(TextStyles)`
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
