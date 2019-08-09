import React from 'react'
import PropTypes from 'prop-types'
import Title from 'components/title'
import {TextContent} from './welcome-text.css'

const WelcomeText = ({children}) => (
  <Title as="h2" size="large">
    <TextContent
      dangerouslySetInnerHTML={{
        __html: children,
      }}
    />
  </Title>
)

WelcomeText.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WelcomeText
