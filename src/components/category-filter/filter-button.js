import React from 'react'
import styled from 'styled-components'
import TextButton from '../text-button'
import {TEXT} from '../../constants/colors'

const FilterButton = styled(TextButton)`
  display: inline-block;
  padding: 0.4rem 0;

  &.inactive {
    opacity: 0.2;
  }

  &:hover {
    opacity: 1;
  }
`
export default FilterButton
