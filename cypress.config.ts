import {defineConfig} from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents: (on, config) => {
      const isDev = config.watchForFileChanges
      const port = process.env.PORT ?? (isDev ? '3000' : '8811')
      const configOverrides: Partial<Cypress.PluginConfigOptions> = {
        baseUrl: `http://localhost:${port}`,
        video: !process.env.CI,
        screenshotOnRunFailure: !process.env.CI,
      }

      // cy.task('log', whatever)
      on('task', {
        log: (message) => {
          console.log(message)

          return null
        },
      })

      return {...config, ...configOverrides}
    },
  },
})
