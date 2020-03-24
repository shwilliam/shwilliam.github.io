const puppeteer = require('puppeteer')
const LIVE_URL = 'https://shwilliam.com'
const BROWSER_DIMENSIONS = {
  width: 360,
  height: 640,
}

let browser
let page
let logs = []
let errors = []

beforeAll(async () => {
  browser = await puppeteer.launch(isDebugging())
  page = await browser.newPage()

  page.on('console', ({text}) => {
    console.log({text})
    logs.push(text)
  })
  page.on('pageerror', e => errors.push(e.text))

  await page.goto(LIVE_URL)
  page.setViewport(BROWSER_DIMENSIONS)
})

beforeEach(async () => {
  errors = []
  logs = []
})

describe('home page', () => {
  test(`renders h1 with text 'Home'`, async () => {
    const html = await page.$eval('h1', e => e.innerHTML)
    expect(html).toContain('Home')
  }, 16000)
  test('no console logs', async () => {
    expect(logs.length).toBe(0)
  })
  test('no exceptions', async () => {
    expect(errors.length).toBe(0)
  })
})

describe('404 page', () => {
  beforeAll(async () => {
    await page.goto(`${LIVE_URL}/sdflkvsm`)
  })
  test(`renders h1 with text '404'`, async () => {
    const html = await page.$eval('h1', e => e.innerHTML)
    expect(html).toContain('404')
  }, 16000)
  test('no exceptions', async () => {
    expect(errors.length).toBe(0)
  })
})

describe('libraries page', () => {
  beforeAll(async () => {
    await page.goto(`${LIVE_URL}/libraries`)
  })
  test(`renders h1 with text 'Components & Libraries'`, async () => {
    const html = await page.$eval('h1', e => e.innerHTML)
    expect(html).toContain('Components &amp; Libraries')
  }, 16000)
  test('no console logs', async () => {
    expect(logs.length).toBe(0)
  })
  test('no exceptions', async () => {
    expect(errors.length).toBe(0)
  })
})

describe('projects page', () => {
  beforeAll(async () => {
    await page.goto(`${LIVE_URL}/projects`)
  })
  test(`renders h1 with text 'Websites & Apps'`, async () => {
    const html = await page.$eval('h1', e => e.innerHTML)
    expect(html).toContain('Websites &amp; Apps')
  }, 16000)
  test('no console logs', async () => {
    expect(logs.length).toBe(0)
  })
  test('no exceptions', async () => {
    expect(errors.length).toBe(0)
  })
})

describe('blog page', () => {
  beforeAll(async () => {
    await page.goto(`${LIVE_URL}/blog`)
  })
  test(`renders h1 with text 'Blog'`, async () => {
    const html = await page.$eval('h1', e => e.innerHTML)
    expect(html).toContain('Recent Posts')
  }, 16000)
  test('no console logs', async () => {
    expect(logs.length).toBe(0)
  })
  test('no exceptions', async () => {
    expect(errors.length).toBe(0)
  })
})

afterAll(() => {
  if (isDebugging()) {
    browser.close()
  }
})

const isDebugging = () =>
  process.env.NODE_ENV === 'debug'
    ? {
        headless: false,
        slowMo: 250,
        devtools: true,
      }
    : {}
