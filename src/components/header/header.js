import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import useWindowScroll from 'hooks/useWindowScroll'
import WidthWrapper from 'components/width-wrapper'
import Nav from 'components/header/nav'
import ImgAvatar from 'components/img-avatar'
import {NoWrap} from 'components/utils'
import {StyledHeader, StyledHeaderLayout} from './header.css'

const Header = ({title}) => {
  const [isScrolled] = useWindowScroll()

  return (
    <StyledHeader className={isScrolled ? 'scrolled' : ''}>
      <WidthWrapper>
        <StyledHeaderLayout>
          <Link to="/">
            <NoWrap>
              <h1>
                <ImgAvatar />
                {title}
              </h1>
            </NoWrap>
          </Link>
          <Nav />
        </StyledHeaderLayout>
      </WidthWrapper>
    </StyledHeader>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
