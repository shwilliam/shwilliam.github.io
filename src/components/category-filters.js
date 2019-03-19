import React, { useContext } from 'react'
import FilterContext from '../context/filter-context'

const CategoryFilters = () => {
  const { setCategory } = useContext(FilterContext)
  // TODO: show active filter

  return (<>
    <div className="ph3 pv2 fl dn dib-l gray">
      Filters:
    </div>
    <ul className="pv2 list pa0 ma0 flex justify-around">
      <li className="dib">
        <button onClick={() => setCategory('visualization')} className="ma0 pa0 bn bg-transparent pointer" type="button">
          <span className="nowrap" role="image" aria-label="visualizations">
            📊
          </span>
        </button>
      </li>
      <li className="dib">
        <button onClick={() => setCategory('website')} className="ma0 pa0 bn bg-transparent pointer" type="button">
          <span className="nowrap" role="image" aria-label="websites">
            💻
          </span>
        </button>
      </li>
      <li className="dib">
        <button onClick={() => setCategory('component')} className="ma0 pa0 bn bg-transparent pointer" type="button">
          <span className="nowrap" role="image" aria-label="components">
            🔨
          </span>
        </button>
      </li>
      <li className="dib">
        <button onClick={() => setCategory('experiment')} className="ma0 pa0 bn bg-transparent pointer" type="button">
          <span className="nowrap" role="image" aria-label="experiments">
            👨‍🔬
          </span>
        </button>
      </li>
      <li className="dib">
        <button onClick={() => setCategory('photos')} className="ma0 pa0 bn bg-transparent pointer" type="button">
          <span className="nowrap" role="image" aria-label="photos">
            📷
          </span>
        </button>
      </li>
    </ul>
  </>)
}

export default CategoryFilters
