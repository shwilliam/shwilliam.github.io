import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import CategoryFilters from './category-filters'
import SearchForm from './search-form'
import FilterContext from '../context/filter-context'
import styled from 'styled-components'

import MEDIA from '../constants/breakpoints'

const StyledHeader = styled.h1`
  margin: 0;
`

const Grid = styled.header`
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-template-areas:
    "logo header"
    "filters search";

  ${MEDIA.PHONE`
    grid-template-columns: none;
    grid-template-areas:
      "logo"
      "filters"
      "search";
  `}
`

const GridLogo = styled.section`
  grid-area: logo;
`

const GridHeader = styled.section`
  grid-area: header;

  ${MEDIA.PHONE`
    display: none;
  `}
`

const GridFilters = styled.section`
  grid-area: filters;
`

const GridSearch = styled.section`
  grid-area: search;
`

const MailIconLink = styled.a`
  display: none;

  ${MEDIA.PHONE`
    display: inline-block;
  `}
`

const Header = ({ siteTitle }) => {
  const { setCategory } = useContext(FilterContext)

  return (
    <Grid>
      <GridLogo className="bb br-ns">
        <StyledHeader className="ma0">
          <Link to="/" onClick={() => setCategory()} className="link near-black ttc db ph3 pb3 pt4 nowrap" tabIndex="-1">
            William L<span className="dn-m">indvall</span>
          </Link>
        </StyledHeader>
      </GridLogo>
      <GridHeader className="bb tr-ns">
        <a className="link near-black ph3 pb3-ns pt4-ns pv2 dib" href="mailto:w-lindvall@outlook.com">
            Contact me
        </a>
      </GridHeader>
      <MailIconLink className="absolute right-1 top-1 link near-black pa3" href="mailto:w-lindvall@outlook.com">
        <span role="img" aria-label="Email">
            📧
        </span>
      </MailIconLink>
      <GridFilters className="ma0 bb br-ns">
        <CategoryFilters />
      </GridFilters>
      <GridSearch className="bb">
        <SearchForm />
      </GridSearch>
    </Grid>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default Header
