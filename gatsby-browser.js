import React from 'react'

import { FilterContextProvider } from './src/context/filter-context'

export const wrapRootElement = ({ element }) => (<FilterContextProvider>{element}</FilterContextProvider>)
