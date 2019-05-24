import React from 'react'
import PropTypes from 'prop-types'
import posed, { PoseGroup } from 'react-pose'

class Transition extends React.PureComponent {
  render () {
    const { children, location } = this.props

    let { key } = this.props
    if (!key) key = location.pathname

    const RoutesContainer = posed.div({
      enter: {
        opacity: 1,
        delay: 250,
        delayChildren: 250
      },
      exit: {
        opacity: 0
      }
    })

    return <PoseGroup>
      <RoutesContainer key={key}>
        {children}
      </RoutesContainer>
    </PoseGroup>
  }
}

Transition.propTypes = {
  key: PropTypes.string,
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
}

export default Transition
