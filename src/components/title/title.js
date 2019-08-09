import React from 'react'
import PropTypes from 'prop-types'
import {Text} from './title.css'

const Title = ({children, as = 'span', size, ...props}) => {
  return (
    <Text as={as} size={size} {...props}>
      {children}
    </Text>
  )
}

Title.propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
}

export default Title
