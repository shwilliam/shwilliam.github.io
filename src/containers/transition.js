import React from 'react'
import PropTypes from 'prop-types'
import posed, {PoseGroup} from 'react-pose'

const Transition = ({children, location}) => {
  const RoutesContainer = posed.div({
    enter: {opacity: 1},
    exit: {opacity: 0},
  })

  return (
    <PoseGroup animateOnMount={true}>
      <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
    </PoseGroup>
  )
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Transition
