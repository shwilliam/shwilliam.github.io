import React from 'react'
import {Consumer} from 'store/createContext'

const CategoryFilter = () => (
  <Consumer>
    {({activeCategory, onCategorySelect}) => (
      <fieldset>
        <label>
          <input
            value="react"
            onChange={onCategorySelect}
            checked={activeCategory === 'react'}
            name="category"
            type="radio"
          />
          React
        </label>
        <label>
          <input
            value="vue"
            onChange={onCategorySelect}
            checked={activeCategory === 'vue'}
            name="category"
            type="radio"
          />
          Vue
        </label>
        <label>
          <input
            value="stylus"
            onChange={onCategorySelect}
            checked={activeCategory === 'stylus'}
            name="category"
            type="radio"
          />
          Stylus
        </label>
        <label>
          <input
            value="vanilla"
            onChange={onCategorySelect}
            checked={activeCategory === 'vanilla'}
            name="category"
            type="radio"
          />
          Vanilla
        </label>
      </fieldset>
    )}
  </Consumer>
)

export default CategoryFilter
