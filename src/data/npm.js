const Nightmare = require('nightmare')
const nightmare = Nightmare()

module.exports = async function() {
  const URL = 'https://npm-stat.com/charts.html?author=shwilliam'
  const selector = 'table.alternating tr:last-of-type td:last-of-type'
  let downloads = 23191 // 202-07-02

  try {
    downloads = await nightmare
      .goto(URL)
      .wait('table.alternating')
      .wait(3000)
      .evaluate(
        selector => document.querySelector(selector).innerText,
        selector,
      )
      .end()
  } catch (error) {
    console.error(error)
  }

  return downloads
}
