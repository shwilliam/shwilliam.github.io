import React from 'react'
import FilterContext from '../context/filter-context'

class SearchForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.makeSearch = this.makeSearch.bind(this)
  }

  handleInput ({ target }) {
    this.setState({ query: target.value })
  }

  makeSearch (e) {
    e.preventDefault()
    this.context.setQuery(this.state.query)
    this.setState({ query: '' })
  }

  render () {
    return (
      <form onSubmit={this.makeSearch}>
        <label className="sr-only" htmlFor="search-input">Search for a project</label>
        <input
          id="search-input"
          name="search-input"
          type="search"
          className="input-reset bn ph3 pv2 ma0 w-100 lh-copy"
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
