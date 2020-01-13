const fetch = require('node-fetch')
require('dotenv').config()

const WHITELIST = ['sv.reactjs.org', 'vue-skip-to']

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
        '{ viewer { pullRequests(first: 100) { nodes { createdAt title number url repository { name url owner { login } } } } } }',
    }),
  })
  const data = await res.json()
  const prs = data.data.viewer.pullRequests.nodes
    .filter(d => WHITELIST.includes(d.repository.name))
    .reverse()

  return prs
}
