import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import CategoryFilters from './category-filters'

const Header = ({ siteTitle }) => (
  <header>
    <div className="dib w-100 w-30-ns bb br-ns relative">
      <section>
        <h1 className="f4-ns f3 ma0">
          <Link to="/" className="link near-black ttc db ph3 pb3 pt4 nowrap" tabIndex="-1">
            William L<span className="dn-m">indvall</span>
          </Link>
        </h1>
      </section>
      <section>
        <a className="dn-ns absolute right-1 top-1 link near-black pa3 f4-ns f3" href="mailto:w-lindvall@outlook.com">
          <span role="img" aria-label="Email">
            📧
          </span>
        </a>
      </section>
    </div>
    <section className="dib-ns dn fr bb tr-ns w-100 w-70-ns">
      <a className="link near-black ph3 pb3-ns pt4-ns pv2 dib" href="mailto:w-lindvall@outlook.com">
        Contact me
      </a>
    </section>
    <div>
      <section className="dib w-100 f4 w-30-ns ma0 bb br-ns">
        <CategoryFilters />
      </section>
      <section className="fr tr-ns w-100 w-70-ns bb">
        <form>
          <label className="sr-only" htmlFor="search-input">Search for a project</label>
          {/* TODO: enable search */}
          <input disabled id="search-input" name="search-input" type="search" className="input-reset bn ph3 pv2 ma0 w-100 lh-copy" placeholder="Search..."/>
        </form>
      </section>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default Header
