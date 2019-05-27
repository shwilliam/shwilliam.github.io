import React, {useEffect} from 'react'
import Siema from 'siema'
import PropTypes from 'prop-types'

const Carousel = ({children, ...props}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      new Siema() // eslint-disable-line
    }
  }, [])

  return (
    <div className="siema" {...props}>
      {children}
    </div>
  )
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Carousel
