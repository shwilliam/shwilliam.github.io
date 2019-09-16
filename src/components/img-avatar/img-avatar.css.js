import Img from 'gatsby-image'
import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const ImgStyled = styled(Img)`
  border-radius: 50%;
  vertical-align: middle;
  position: relative;
  top: -0.3rem;

  // HACK: hide gatsby Img component on mobile
  ${MEDIA.TABLET`
    &, & * {
      display: none;
      width: 0 !important;
      height: 0 !important;
    }
  `}

  ${MEDIA.MIN_TABLET`
    &,
    & * {
      display: inline-block;
      margin-right: 0.8rem;
    }
  `}
`
