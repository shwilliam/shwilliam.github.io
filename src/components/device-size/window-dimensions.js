import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const isClient = typeof window !== 'undefined'

const WindowDimensions = ({children}) => {
  const [size, setSize] = useState({
    width: isClient && window.innerWidth,
    height: isClient && window.innerHeight,
  })
  const updateSize = () =>
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

  useEffect(() => {
    isClient && window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return children(size)
}

WindowDimensions.propTypes = {
  children: PropTypes.func.isRequired,
}

export default WindowDimensions
