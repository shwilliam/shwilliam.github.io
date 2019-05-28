import React, {useContext} from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import FilterContext from '../../context/filter-context'
import CategoryFilters from '../category-filter/category-filters'
import SearchForm from '../search-form'
import HideOnDevice from '../hide-on-device'
import Title from './title'
import Grid, {GridLogo, GridHeader, GridFilters, GridSearch} from './grid'
import ContactLink from './contact-link'
import MailIconLink from './mail-icon-link'

const Header = () => {
  const {setCategory} = useContext(FilterContext)

  return (
    <header>
      <Grid>
        <GridLogo>
          <Link to="/" onClick={() => setCategory()} tabIndex="-1">
            <Title>
              William L<HideOnDevice device="TABLET">indvall</HideOnDevice>
            </Title>
          </Link>
        </GridLogo>
        <GridHeader>
          <ContactLink>Contact me</ContactLink>
        </GridHeader>
        <MailIconLink />
        <GridFilters>
          <CategoryFilters />
        </GridFilters>
        <GridSearch>
          <SearchForm />
        </GridSearch>
      </Grid>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
