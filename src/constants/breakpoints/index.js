import {css} from 'styled-components'
import breakpoints from './breakpoints'

const MEDIA = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label] / 16}em) {
      ${css(...args)};
    }
  `

  acc[`MIN_${label}`] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)};
    }
  `

  return acc
}, {})

export const BREAKPOINTS = breakpoints
export default MEDIA
