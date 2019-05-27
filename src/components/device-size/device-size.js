import React from 'react'
import PropTypes from 'prop-types'
import {BREAKPOINTS} from '../../constants/breakpoints'
import WindowDimensions from './window-dimensions'

const DeviceSize = ({children}) => (
  <WindowDimensions>
    {({width}) =>
      children(
        width < BREAKPOINTS.MOBILE
          ? 'MOBILE'
          : width > BREAKPOINTS.DESKTOP
          ? 'DESKTOP'
          : 'TABLET',
      )
    }
  </WindowDimensions>
)

DeviceSize.propTypes = {
  children: PropTypes.func.isRequired,
}

export default DeviceSize
