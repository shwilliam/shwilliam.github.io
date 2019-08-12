import React from 'react'
import IO from 'components/io'
import Title from 'components/title'
import {Wrapper} from './io-wave.css'

const IOWave = () => (
  <IO rootMargin="-50px">
    {({isVisible}) => (
      <Wrapper isVisible={isVisible}>
        <Title as="span">👋</Title>
      </Wrapper>
    )}
  </IO>
)

export default IOWave
