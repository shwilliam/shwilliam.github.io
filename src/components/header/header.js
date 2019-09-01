import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import useWindowScroll from 'hooks/useWindowScroll'
import Nav from 'components/header/nav'
import {NoWrap, SROnly} from 'components/utils'
import {Header as HeaderStyled, HeaderLayout, HeaderTitle} from './header.css'

const Header = ({title}) => {
  const [isScrolled] = useWindowScroll()

  return (
    <HeaderStyled className={isScrolled ? 'scrolled' : ''}>
      <HeaderLayout>
        <Link to="/home">
          <NoWrap>
            <h1>
              <SROnly>{title}</SROnly>
            </h1>
            <HeaderTitle>W</HeaderTitle>
          </NoWrap>
        </Link>
        <Nav />
      </HeaderLayout>
    </HeaderStyled>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
