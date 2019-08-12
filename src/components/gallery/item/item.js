import React from 'react'
import PropTypes from 'prop-types'
import {Title, Copy} from './item.css'

const Item = ({title, copy}) => (
  <div>
    <Title as="span">{title}</Title>
    <Copy>{copy}</Copy>
  </div>
)

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object,
}

export default Item
