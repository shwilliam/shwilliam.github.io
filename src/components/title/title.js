import React from 'react'
import PropTypes from 'prop-types'
import {Text} from './title.css'

const Title = ({children, as = 'span', ...props}) => {
  return (
    <Text as={as} {...props}>
      {children}
    </Text>
  )
}

Title.propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.string,
}

export default Title
