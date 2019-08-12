import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import useWindowScroll from 'hooks/useWindowScroll'
import Title from 'components/title'
import WidthContainer from 'components/width-container'
import Nav from 'components/header/nav'
import {Container, FlexContainer} from './header.css'

const Header = ({title}) => {
  const [isScrolled] = useWindowScroll()

  return (
    <Container className={isScrolled ? 'scrolled' : ''}>
      <WidthContainer>
        <FlexContainer>
          <Link to="/">
            <Title as="h1">
              <span role="img" aria-label="Laptop">
                💻
              </span>
              {title}
            </Title>
          </Link>

          <Nav />
        </FlexContainer>
      </WidthContainer>
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
