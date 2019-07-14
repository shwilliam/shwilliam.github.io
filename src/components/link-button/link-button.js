import React from 'react'
import PropTypes from 'prop-types'
import {Button} from './link-button.css'

const LinkButton = ({children, ...props}) => (
  <Button {...props}>{children}</Button>
)

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LinkButton
