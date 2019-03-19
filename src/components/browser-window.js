import React from 'react'
import PropTypes from 'prop-types'
import './browser-window.css'

const BrowserWindow = ({ children, ...props }) => {
  return (
    <div className="browser-window">
      <span className="button"/>
      <span className="button"/>
      <span className="button"/>
      <div {...props}>
        {children}
      </div>
    </div>
  )
}

BrowserWindow.propTypes = {
  children: PropTypes.node.isRequired
}

export default BrowserWindow
