import React from 'react'
import PropTypes from 'prop-types'
import {Consumer} from 'store/createContext'
import {TagButton} from 'components/tag'
import {SROnly} from 'components/utils'
import {Fieldset} from './category-filter.css'

const CategoryFilter = ({filters}) => (
  <Consumer>
    {({activeCategory, onCategorySelect}) => (
      <Fieldset>
        {filters.map(filter => (
          <label key={filter}>
            <SROnly>
              <input
                value={filter}
                onChange={onCategorySelect}
                checked={activeCategory === filter}
                name="category"
                type="radio"
                className="sr-only"
              />
            </SROnly>
            <TagButton value={filter} active={activeCategory === filter}>
              {filter}
            </TagButton>
          </label>
        ))}
      </Fieldset>
    )}
  </Consumer>
)

CategoryFilter.propTypes = {
  filters: PropTypes.array.isRequired,
}

export default CategoryFilter
