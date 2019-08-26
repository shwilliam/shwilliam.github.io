import React from 'react'
import AppProvider from 'store/provider'
import wrapPageElementWithTransition from 'helpers/wrapPageElement'

// syntax highlight code blocks
require('prismjs/themes/prism.css')
require('prismjs/plugins/command-line/prism-command-line.css')

// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({element}) => {
  return <AppProvider>{element}</AppProvider>
}

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition
