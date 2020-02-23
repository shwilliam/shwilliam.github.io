const fetch = require('node-fetch')
require('dotenv').config()

module.exports = async function() {
  // TODO: cache request
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.GH_TOKEN}`,
    },
    body: JSON.stringify({
      query:
        '{ viewer { repositories(first: 1) { totalCount } gists(first: 1) { totalCount } } }',
    }),
  })
  const data = await res.json()
  const repos = data.data.viewer.repositories.totalCount
  const gists = data.data.viewer.gists.totalCount

  return {repos, gists}
}
