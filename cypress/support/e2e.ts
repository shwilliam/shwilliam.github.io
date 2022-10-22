import '@testing-library/cypress/add-commands'
import './commands'

Cypress.on('uncaught:exception', err => {
  // idk, fixes cypress + react hydration
  if (
    /hydrat/i.test(err.message) ||
    /Minified React error #418/.test(err.message) ||
    /Minified React error #423/.test(err.message)
  ) {
    return false
  }
})
