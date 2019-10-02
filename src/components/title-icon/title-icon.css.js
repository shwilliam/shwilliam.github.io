import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const TitleIcon = styled.span`
  display: none;
  vertical-align: middle;
  position: relative;
  top: -0.15rem;
  margin-right: 1.5rem;
  font-size: 2.4rem;

  ${MEDIA.MIN_TABLET`
    display: initial;
  `}
`
