import React from 'react'
import WidthWrapper from 'components/width-wrapper'
import {Link} from '../utils'
import {Footer as FooterStyled, FooterActions} from './footer.css'

const Footer = () => (
  <FooterStyled>
    <WidthWrapper>
      <FooterActions>
        <Link
          href="https://ko-fi.com/shwilliam"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ko-Fi
        </Link>
        <Link
          href="https://github.com/shwilliam"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <Link href="/rss.xml" target="_blank" rel="noopener noreferrer">
          RSS
        </Link>
      </FooterActions>
    </WidthWrapper>
  </FooterStyled>
)

export default Footer
