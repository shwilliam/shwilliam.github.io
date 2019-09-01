import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Banner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2rem;
  padding-top: 4.5rem;
  padding-bottom: 3rem;

  ${MEDIA.MIN_PHONE`
    margin-right: 4rem;
    padding-bottom: 4.5rem;
  `}

  ${MEDIA.MIN_TABLET`
    display: flex;
    margin-right: 35%;
    padding-top: 6rem;
    padding-bottom: 6rem;
  `}

  ${MEDIA.MIN_DESKTOP`
    padding-top: 9rem;
    padding-bottom: 7.5rem;
  `}
`

export const BannerHeading = styled.p`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 0.75rem;

  ${MEDIA.MIN_TABLET`
    margin-bottom: 1.5rem;
  `}
`

export const BannerSubheading = styled.p`
  font-size: 18px;
  margin-bottom: 1.5rem;
`
