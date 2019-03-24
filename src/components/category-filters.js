import React, { useContext } from 'react'
import FilterContext from '../context/filter-context'

const CategoryFilters = () => {
  const { category: activeCategory, setCategory } = useContext(FilterContext)

  return (
    <section>
      <div className="ph3 pv2 fl dn dib-l gray">
      Filters:
      </div>
      <ul className="list pv2 ph0 ma0 flex justify-around">
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
              value: 'component',
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
            <li key={category.value} className="dib">
              <button onClick={() => setCategory(category.value)} className={`
                mv0 pa0 bn br-100 bg-transparent pointer grow
                ${(activeCategory && category.value !== activeCategory) ? 'o-50' : 'o-100'}
              `} type="button">
                <span className="nowrap lh-copy" role="image" aria-label={category.value}>
                  {category.emoji}
                </span>
              </button>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default CategoryFilters
