import React from 'react'
import {Consumer} from 'store/createContext'
import {TagButton} from 'components/tag'
import SROnly from 'components/sr-only'

const CategoryFilter = () => (
  <Consumer>
    {({activeCategory, onCategorySelect}) => (
      <fieldset>
        <label>
          <SROnly>
            <input
              value="react"
              onChange={onCategorySelect}
              checked={activeCategory === 'react'}
              name="category"
              type="radio"
              className="sr-only"
            />
          </SROnly>
          <TagButton value="react" active={activeCategory === 'react'}>
            react
          </TagButton>
        </label>
        <label>
          <SROnly>
            <input
              value="vue"
              onChange={onCategorySelect}
              checked={activeCategory === 'vue'}
              stylus="category"
              type="radio"
              className="sr-only"
            />
          </SROnly>
          <TagButton value="vue" active={activeCategory === 'vue'}>
            vue
          </TagButton>
        </label>
        <label>
          <SROnly>
            <input
              value="stylus"
              onChange={onCategorySelect}
              checked={activeCategory === 'stylus'}
              name="category"
              type="radio"
              className="sr-only"
            />
          </SROnly>
          <TagButton value="stylus" active={activeCategory === 'stylus'}>
            stylus
          </TagButton>
        </label>
        <label>
          <SROnly>
            <input
              value="vanilla"
              onChange={onCategorySelect}
              checked={activeCategory === 'vanilla'}
              name="category"
              type="radio"
              className="sr-only"
            />
          </SROnly>
          <TagButton value="vanilla" active={activeCategory === 'vanilla'}>
            vanilla
          </TagButton>
        </label>
      </fieldset>
    )}
  </Consumer>
)

export default CategoryFilter
