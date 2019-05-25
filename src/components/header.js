import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import CategoryFilters from './category-filters'
import SearchForm from './search-form'
import FilterContext from '../context/filter-context'
import styled from 'styled-components'

import MEDIA from '../constants/breakpoints'

const HeaderFirst = styled.h1`
  font-size: 1.4rem;
  margin: 0;
  white-space: nowrap;
  padding-top: 1.7rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
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
  min-width: 0;
  border-bottom: 1px solid black;
  `

const GridHeader = styled.section`
  grid-area: header;
  border-bottom: 1px solid black;
  text-align: right;

  ${MEDIA.PHONE`
    display: none;
  `}
`

const GridFilters = styled.section`
  grid-area: filters;
  min-width: 0;
  border-bottom: 1px solid black;
`

const GridSearch = styled.section`
  grid-area: search;
  height: 2.7rem;
  border-bottom: 1px solid black;
`

const ContactLink = styled.a`
  display: inline-block;
  line-height: 1.75;
  padding-top: 1.7rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`

const MailIconLink = styled.a`
  display: none;
  position: absolute;
  right: 0;
  top: 0.75rem;
  padding: 1rem;

  ${MEDIA.PHONE`
    display: inline-block;
  `}
`

const Header = () => {
  const { setCategory } = useContext(FilterContext)

  return (
    <Grid>
      <GridLogo>
        <HeaderFirst>
          <Link to="/" onClick={() => setCategory()} tabIndex="-1">
            William L<span className="dn-m">indvall</span>
          </Link>
        </HeaderFirst>
      </GridLogo>
      <GridHeader>
        <ContactLink href="mailto:w-lindvall@outlook.com">
            Contact me
        </ContactLink>
      </GridHeader>
      <MailIconLink href="mailto:w-lindvall@outlook.com">
        <span role="img" aria-label="Email">
            📧
        </span>
      </MailIconLink>
      <GridFilters>
        <CategoryFilters />
      </GridFilters>
      <GridSearch>
        <SearchForm />
      </GridSearch>
    </Grid>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default Header
