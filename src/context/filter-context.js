import React from 'react'
import PropTypes from 'prop-types'

const defaultState = {
  category: undefined,
  query: undefined,
  setCategory: () => {},
}

const FilterContext = React.createContext(defaultState)

class FilterContextProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: undefined,
      query: undefined,
    }

    this.setCategory = this.setCategory.bind(this)
    this.setQuery = this.setQuery.bind(this)
  }

  setCategory(category) {
    if (category === this.state.category) {
      this.setState({category: undefined})
    } else {
      this.setState({category})
    }
  }

  setQuery(query = '') {
    this.setState({query})
  }

  render() {
    const {children} = this.props
    const {category, query} = this.state

    return (
      <FilterContext.Provider
        value={{
          category,
          query,
          setCategory: this.setCategory,
          setQuery: this.setQuery,
        }}
      >
        {children}
      </FilterContext.Provider>
    )
  }
}

FilterContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export {FilterContextProvider}

export default FilterContext
