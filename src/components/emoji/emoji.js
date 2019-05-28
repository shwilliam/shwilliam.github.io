import React from 'react'
import PropTypes from 'prop-types'

const Emoji = ({label, children}) => (
  <span role="img" aria-label={label}>
    {children}
  </span>
)

Emoji.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Emoji
