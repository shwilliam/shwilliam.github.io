import styled from 'styled-components'
import Img from 'gatsby-image'

export const ImageSplashWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageSplashStyled = styled(Img)`
  width: 90vw;
  max-width: 700px;
  zindex: -1;
  border-radius: 10px;
  box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.1);
`
