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
    <Grid>
      <GridLogo>
        <Title>
          <Link to="/" onClick={() => setCategory()} tabIndex="-1">
            William L<HideOnDevice device="TABLET">indvall</HideOnDevice>
          </Link>
        </Title>
      </GridLogo>
      <HideOnDevice device="PHONE">
        <GridHeader>
          <ContactLink href="mailto:w-lindvall@outlook.com">
            Contact me
          </ContactLink>
        </GridHeader>
      </HideOnDevice>
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
  siteTitle: PropTypes.string.isRequired,
}

export default Header
