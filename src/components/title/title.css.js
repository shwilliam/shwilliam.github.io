import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Text = styled.span`
  display: block;
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.45;

  ${MEDIA.TABLET`
    font-size: 2rem;
  `};
`
