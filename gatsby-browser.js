import React from 'react'
// import Transition from './src/components/transition'

import { FilterContextProvider } from './src/context/filter-context'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <FilterContextProvider>
    {element}
  </FilterContextProvider>
)

// full-page transition
// eslint-disable-next-line react/prop-types
// export const wrapPageElement = ({ element, props }) => (
//   <Transition {...props}>
//     {element}
//   </Transition>
// )
