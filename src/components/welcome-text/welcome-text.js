import React from 'react'
import PropTypes from 'prop-types'
import Title from 'components/title'
import {TextContent} from './welcome-text.css'

const WelcomeText = ({children, ...props}) => (
  <Title as="h2" size="large" {...props}>
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
