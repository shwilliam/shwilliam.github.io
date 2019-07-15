import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Text = styled.span`
  display: block;
  font-weight: 400;
  font-size: ${({size}) => () => {
    switch (size) {
      case 'large':
        return '3.2rem'
      default:
        return '2rem'
    }
  }};
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({size}) => () => (size === 'large' ? '2.2rem' : '2rem')};
  `};
`
