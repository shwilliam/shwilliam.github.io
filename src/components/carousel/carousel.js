import React from 'react'
import Siema from 'react-siema'
import PropTypes from 'prop-types'

const Carousel = ({children}) => <Siema>{children}</Siema>

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default Carousel
