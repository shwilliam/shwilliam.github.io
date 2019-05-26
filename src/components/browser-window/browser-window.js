import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BrowserWindowWrapper = styled.div`
  width: 100%;
  background: #ececec;
  -webkit-box-shadow: 0 16px 80px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 16px 80px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #ececec;
  border-radius: 5px;

  .button:before {
    content: "";
    position: relative;
    display: inline-block;
    width: 7px;
    height: 7px;
    top: -4px;
    left: 8px;
    margin: 0 2.8px;
    border-radius: 7px;
    background-color: darkgray;
  }
`

const BrowserWindow = ({ children, ...props }) => <BrowserWindowWrapper>
  <span className="button"/>
  <span className="button"/>
  <span className="button"/>
  <div {...props}>
    {children}
  </div>
</BrowserWindowWrapper>

BrowserWindow.propTypes = {
  children: PropTypes.node.isRequired
}

export default BrowserWindow
