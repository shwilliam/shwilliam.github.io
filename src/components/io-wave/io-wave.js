import React from 'react'
import IO from 'components/io'
import Title from 'components/title'
import {Container} from './io-wave.css'

const IOWave = () => (
  <IO rootMargin="-50px">
    {({isVisible}) => (
      <Container isVisible={isVisible}>
        <Title tag="span">👋</Title>
      </Container>
    )}
  </IO>
)

export default IOWave
