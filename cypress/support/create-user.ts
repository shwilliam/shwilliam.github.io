// create a new user and login with that user
// npx ts-node --require tsconfig-paths/register ./cypress/support/create-user.ts username@example.com

import {installGlobals} from '@remix-run/node'
import {parse} from 'cookie'

import {createUser} from '~/models/user.server'
import {createUserSession} from '~/session.server'

installGlobals()

async function createAndLogin(email: string) {
  if (!email) {
    throw new Error('email required for login')
  }
  if (!email.endsWith('@example.com')) {
    throw new Error('All test emails must end in @example.com')
  }

  const user = await createUser(email, 'myreallystrongpassword')

  const response = await createUserSession({
    request: new Request('test://test'),
    userId: user.id,
    remember: false,
    redirectTo: '/',
  })

  const cookieValue = response.headers.get('Set-Cookie')
  if (!cookieValue) {
    throw new Error('Cookie missing from createUserSession response')
  }
  const parsedCookie = parse(cookieValue)
  // log it like this so cypress command can parse it out and set it as cookie value
  console.log(
    `
<cookie>
  ${parsedCookie.__session}
</cookie>
  `.trim(),
  )
}

createAndLogin(process.argv[2])
