import React, {useContext} from 'react'
import {navigate} from 'gatsby'
import {BREAKPOINTS} from '../../constants/breakpoints'
import FilterContext from '../../context/filter-context'
import Emoji from '../emoji'
import FilterButton from './filter-button'
import Label from './label'
import FilterList from './filter-list'

const CategoryFilters = () => {
  const {category: activeCategory, setCategory} = useContext(FilterContext)

  return (
    <section>
      <Label>Filters:</Label>
      <FilterList>
        {[
          {
            value: 'visualization',
            emoji: '📊',
          },
          {
            value: 'website',
            emoji: '💻',
          },
          {
            value: 'tool',
            emoji: '🔨',
          },
          {
            value: 'experiment',
            emoji: '👨‍🔬',
          },
          {
            value: 'photos',
            emoji: '📷',
          },
        ].map(category => (
          <li key={category.value}>
            <FilterButton
              onClick={() => {
                setCategory(category.value)
                if (
                  typeof window !== 'undefined' &&
                  window.innerWidth < BREAKPOINTS.PHONE
                ) {
                  // close open article
                  navigate('/')
                }
              }}
              className={`${
                activeCategory && category.value !== activeCategory
                  ? 'inactive'
                  : 'active'
              }`}
              type="button"
            >
              <Emoji label={category.value}>{category.emoji}</Emoji>
            </FilterButton>
          </li>
        ))}
      </FilterList>
    </section>
  )
}

export default CategoryFilters
