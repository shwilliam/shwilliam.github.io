import React from 'react'
import PropTypes from 'prop-types'
import {TitleIcon as TitleIconStyles} from './title-icon.css'

const TitleIcon = ({label, children}) => (
  <TitleIconStyles aria-role="img" aria-label={label}>
    {children}
  </TitleIconStyles>
)

TitleIcon.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default TitleIcon
