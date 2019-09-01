import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Map = styled.img`
  display: none;

  ${MEDIA.MIN_TABLET`
    display: inline-block;
    position: absolute;
    left: 120%;
    transform: scale(2);
    z-index: -999;
    min-width: 400px;
    left: 108%;
    top: 8%;
  `}

  ${MEDIA.MIN_DESKTOP`
    top: -5%;
    left: 120%;
  `}
`
