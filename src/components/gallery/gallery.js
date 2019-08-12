import React from 'react'
import PropTypes from 'prop-types'
import Item from 'components/gallery/item'
import {Wrapper} from './gallery.css'

const Gallery = ({items}) => (
  <Wrapper>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Wrapper>
)

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Gallery
