import React from 'react'
import {navigate} from 'gatsby'
import FilterContext from '../../context/filter-context'
import {BREAKPOINTS} from '../../constants/breakpoints'
import Input from './input'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
    }

    this.handleInput = this.handleInput.bind(this)
    this.makeSearch = this.makeSearch.bind(this)
  }

  handleInput({target}) {
    this.setState({query: target.value})
  }

  makeSearch(e) {
    e.preventDefault()
    this.context.setQuery(this.state.query)
    this.setState({query: ''})

    if (
      typeof window !== 'undefined' &&
      window.innerWidth < BREAKPOINTS.PHONE
    ) {
      // close open article
      navigate('/')
    }
  }

  render() {
    return (
      <form onSubmit={this.makeSearch}>
        <label className="sr-only" htmlFor="search-input">
          Search for a project
        </label>
        <Input
          id="search-input"
          name="search-input"
          type="search"
          placeholder="Search..."
          value={this.state.query}
          onChange={this.handleInput}
        />
      </form>
    )
  }
}

SearchForm.contextType = FilterContext

export default SearchForm
