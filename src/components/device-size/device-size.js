import React from 'react'
import PropTypes from 'prop-types'
import {BREAKPOINTS} from '../../constants/breakpoints'
import WindowDimensions from './window-dimensions'

const DeviceSize = ({children}) => (
  <WindowDimensions>
    {({width}) => {
      if (width < BREAKPOINTS.MOBILE) {
        return children('MOBILE')
      } else if (width > BREAKPOINTS.DESKTOP) {
        return children('DESKTOP')
      } else {
        return children('TABLET')
      }
    }}
  </WindowDimensions>
)

DeviceSize.propTypes = {
  children: PropTypes.func.isRequired,
}

export default DeviceSize
