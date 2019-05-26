import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import MEDIA from '../../constants/breakpoints'

const HideOnDevice = ({ device, children }) => {
  const BigOnlySpan = styled.span`
    display: initial;
    ${MEDIA[device]`
      display: none;
    `}
  `

  return <BigOnlySpan>{children}</BigOnlySpan>
}

HideOnDevice.propTypes = {
  device: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default HideOnDevice
