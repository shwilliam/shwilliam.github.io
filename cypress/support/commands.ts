import {faker} from '@faker-js/faker'

declare global {
  namespace Cypress {
    interface Chainable {
      // log in with rando user
      // cy.login()
      // cy.login({ email: 'whatever@example.com' })
      login: typeof login

      // delete user
      // cy.cleanupUser({ email: 'whatever@example.com' })
      // cy.cleanupUser()
      cleanupUser: typeof cleanupUser

      // cy.visitAndCheck('/')
      // cy.visitAndCheck('/', 500)
      visitAndCheck: typeof visitAndCheck
    }
  }
}

function login({
  email = faker.internet.email(undefined, undefined, 'example.com'),
}: {
  email?: string
} = {}) {
  cy.then(() => ({email})).as('user')
  cy.exec(
    `npx ts-node --require tsconfig-paths/register ./cypress/support/create-user.ts "${email}"`,
  ).then(({stdout}) => {
    const cookieValue = stdout
      .replace(/.*<cookie>(?<cookieValue>.*)<\/cookie>.*/s, '$<cookieValue>')
      .trim()
    cy.setCookie('__session', cookieValue)
  })
  return cy.get('@user')
}

function cleanupUser({email}: {email?: string} = {}) {
  if (email) {
    deleteUserByEmail(email)
  } else {
    cy.get('@user').then((user) => {
      const email = (user as {email?: string}).email
      if (email) {
        deleteUserByEmail(email)
      }
    })
  }
  cy.clearCookie('__session')
}

function deleteUserByEmail(email: string) {
  cy.exec(
    `npx ts-node --require tsconfig-paths/register ./cypress/support/delete-user.ts "${email}"`,
  )
  cy.clearCookie('__session')
}

// https://github.com/cypress-io/cypress/issues/7306
// https://github.com/cypress-io/cypress/issues/7306#issuecomment-1152752612
function visitAndCheck(url: string, waitTime: number = 1000) {
  cy.visit(url)
  cy.location('pathname').should('contain', url).wait(waitTime)
}

Cypress.Commands.add('login', login)
Cypress.Commands.add('cleanupUser', cleanupUser)
Cypress.Commands.add('visitAndCheck', visitAndCheck)
