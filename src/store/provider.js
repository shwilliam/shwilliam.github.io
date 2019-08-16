import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Provider} from './createContext'

const AppProvider = ({children}) => {
  const [activeCategory, setActiveCategory] = useState(null)

  const onCategorySelect = e =>
    e.target.value === activeCategory
      ? setActiveCategory(null)
      : setActiveCategory(e.target.value)

  return (
    <Provider
      value={{
        activeCategory,
        onCategorySelect,
        setActiveCategory,
      }}
    >
      {children}
    </Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppProvider
