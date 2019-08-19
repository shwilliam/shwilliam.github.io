import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import Box from 'components/box'

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;

  ${MEDIA.MIN_TABLET`
    margin-top: 6rem;
    height: 55vh;
    margin-bottom: 0;
  `}
`
