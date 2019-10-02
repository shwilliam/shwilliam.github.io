import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import useWindowScroll from 'hooks/useWindowScroll'
import Nav from 'components/header/nav'
import TitleIcon from 'components/title-icon'
import {WidthWrapper, NoWrap} from 'components/utils'
import {Header as HeaderStyled, HeaderLayout} from './header.css'

const Header = ({title}) => {
  const [isScrolled] = useWindowScroll()

  return (
    <HeaderStyled className={isScrolled ? 'scrolled' : ''}>
      <WidthWrapper>
        <HeaderLayout>
          <Link to="/home">
            <NoWrap>
              <h1>
                <TitleIcon label="Keyboard">⌨️</TitleIcon>
                {title}
              </h1>
            </NoWrap>
          </Link>
          <Nav />
        </HeaderLayout>
      </WidthWrapper>
    </HeaderStyled>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
