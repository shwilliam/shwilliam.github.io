import React from 'react'
import {WidthWrapper, Link} from '../utils'
import {Footer as FooterStyled, FooterActions} from './footer.css'

const Footer = () => (
  <FooterStyled>
    <WidthWrapper>
      <FooterActions>
        <Link href="mailto:w-lindvall@outlook.com?subject=Let's grab a coffee!">
          Contact
        </Link>
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
