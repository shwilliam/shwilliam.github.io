import React from 'react'
import PropTypes from 'prop-types'
import StyleWrapper from './style-wrapper'
import Button from './button'

const BrowserWindow = ({ children, ...props }) => <StyleWrapper>
  <Button />
  <Button />
  <Button />
  <div {...props}>
    {children}
  </div>
</StyleWrapper>

BrowserWindow.propTypes = {
  children: PropTypes.node.isRequired
}

export default BrowserWindow
