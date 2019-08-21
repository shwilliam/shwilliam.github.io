import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import useWindowScroll from 'hooks/useWindowScroll'
import Title from 'components/title'
import WidthWrapper from 'components/width-wrapper'
import Nav from 'components/header/nav'
import {Wrapper, FlexWrapper} from './header.css'
import ImgAvatar from 'components/img-avatar'
import WIP from 'components/wip'

const Header = ({title}) => {
  const [isScrolled] = useWindowScroll()

  return (
    <Wrapper className={isScrolled ? 'scrolled' : ''}>
      <WIP>Work in progress! ⚠️</WIP>
      <WidthWrapper>
        <FlexWrapper>
          <Link to="/">
            <Title>
              <ImgAvatar />
              {title}
            </Title>
          </Link>

          <Nav />
        </FlexWrapper>
      </WidthWrapper>
    </Wrapper>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
