import React, { useContext } from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import MEDIA, { BREAKPOINTS } from '../../constants/breakpoints'
import FilterContext from '../../context/filter-context'
import TextButton from '../text-button'
import List from '../list'

const FilterLabel = styled.label`
  display: inline-block;
  padding: 0.7rem 0rem 0.7rem 1rem;
  float: left;

  ${MEDIA.TABLET`
    display: none;
  `}
`

const FilterList = styled(List)`
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0.7rem 1rem;
`

const CategoryFilters = () => {
  const { category: activeCategory, setCategory } = useContext(FilterContext)

  return (
    <section>
      <FilterLabel>
        Filters:
      </FilterLabel>
      <FilterList>
        {
          [
            {
              value: 'visualization',
              emoji: '📊'
            },
            {
              value: 'website',
              emoji: '💻'
            },
            {
              value: 'tool',
              emoji: '🔨'
            },
            {
              value: 'experiment',
              emoji: '👨‍🔬'
            },
            {
              value: 'photos',
              emoji: '📷'
            }
          ].map(category => (
            <li key={category.value}>
              <TextButton onClick={() => {
                setCategory(category.value)
                if (
                  typeof window !== 'undefined' &&
                  window.innerWidth < BREAKPOINTS.PHONE
                ) {
                  // close open article
                  navigate('/')
                }
              }} className={`
                ${(activeCategory && category.value !== activeCategory) ? 'inactive' : 'active'}
              `} type="button">
                <span role="img" aria-label={category.value}>
                  {category.emoji}
                </span>
              </TextButton>
            </li>
          ))
        }
      </FilterList>
    </section>
  )
}

export default CategoryFilters
