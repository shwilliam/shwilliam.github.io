import React from 'react'
import PropTypes from 'prop-types'

const defaultState = {
  category: undefined,
  setCategory: () => {}
}

const FilterContext = React.createContext(defaultState)

class FilterContextProvider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      category: undefined
    }

    this.setCategory = this.setCategory.bind(this)
  }

  setCategory (category) {
    this.setState({ category })
  }

  render () {
    const { children } = this.props
    const { category } = this.state

    return (
      <FilterContext.Provider
        value={{
          category,
          setCategory: this.setCategory
        }}
      >
        {children}
      </FilterContext.Provider>
    )
  }
}

FilterContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { FilterContextProvider }

export default FilterContext
