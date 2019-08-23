import React from 'react'
import PropTypes from 'prop-types'
import {Consumer} from 'store/createContext'
import {TagButton} from 'components/tag'
import {SROnly} from 'components/utils'

const CategoryFilter = ({filters}) => (
  <Consumer>
    {({activeCategory, onCategorySelect}) => (
      <fieldset>
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
      </fieldset>
    )}
  </Consumer>
)

CategoryFilter.propTypes = {
  filters: PropTypes.array.isRequired,
}

export default CategoryFilter
