// TODO: handle no js
// TODO: fix text highlight on pseudo window move

let i = 0
const closest = (el, selector, stopSelector = 'body') => {
  let match = null
  while (el) {
    if (el.matches(selector)) {
      match = el
      break
    } else if (stopSelector && el.matches(stopSelector)) {
      break
    }
    el = el.parentElement
  }
  return match
}

const windowWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth

const windowHeight = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight

// window drag
const makeDraggable = elHeader => {
  const el = closest(elHeader, '.browser-window')
  let offset = [0, 0]
  let isDown = false

  const onDragStart = e => {
    const touch = e.changedTouches
    const offsetX = el.offsetLeft - (touch ? touch[0].clientX : e.clientX)
    const offsetY = el.offsetTop - (touch ? touch[0].clientY : e.clientY)
    offset = [offsetX, offsetY]
    isDown = true
  }
  const onDrag = e => {
    if (isDown) {
      e.preventDefault()

      closest(e.target, '.browser-window').style.zIndex = ++i

      const touch = e.changedTouches

      const dragX = touch ? touch[0].clientX : e.clientX
      el.style.left = `${dragX + offset[0]}px`

      const dragY = touch ? touch[0].clientY : e.clientY
      if (dragY > 0) {
        el.style.top = `${dragY + offset[1]}px`
      }
    }
  }
  const onDragEnd = () => (isDown = false)

  elHeader.addEventListener('mousedown', onDragStart, true)
  elHeader.addEventListener('touchstart', onDragStart, true)
  document.addEventListener('mousemove', onDrag, true)
  document.addEventListener('touchmove', onDrag, true)
  document.addEventListener('mouseup', onDragEnd, true)
  document.addEventListener('touchend', onDragEnd, true)
}

const closeWindow = e => {
  const targetWindow = closest(e.target, '.browser-window')
  const targetWindowTitleBar = targetWindow.getElementsByClassName(
    'browser-window-title',
  )[0]

  // closing welcome window
  if (targetWindowTitleBar) {
    const title = targetWindowTitleBar.innerText
    const state = history.state
    const openWindows = state ? state.windows : []
    const idx = openWindows && openWindows.indexOf(title)
    openWindows.splice(idx, 1)

    history.pushState({windows: openWindows}, '@shwilliam')
  }

  targetWindow.remove()
}

// welcome window
const welcomeWindowCloseBtn = document.getElementById('welcome-close')
welcomeWindowCloseBtn.addEventListener('click', closeWindow)

const welcomeWindow = document.getElementById('welcome-window')
welcomeWindow.addEventListener(
  'click',
  () => (welcomeWindow.style.zIndex = ++i),
)

const welcomeWindowHeader = document.getElementById('welcome-header')
makeDraggable(welcomeWindowHeader)

// window create
const createWindow = (content, title) => {
  const browserWindow = document.createElement('div')
  browserWindow.classList.add('browser-window')
  browserWindow.classList.add('scrollable')
  browserWindow.addEventListener(
    'click',
    () => (browserWindow.style.zIndex = ++i),
  )

  const browserWindowContent = document.createElement('div')
  browserWindowContent.classList.add('browser-window-content')
  browserWindowContent.innerHTML = content

  const browserWindowHeader = document.createElement('div')
  browserWindowHeader.classList.add('browser-window-header')

  const browserWindowTitle = document.createElement('h2')
  browserWindowTitle.classList.add('browser-window-title')
  browserWindowTitle.innerText = title

  const browserWindowClose = document.createElement('button')
  browserWindowClose.classList.add('browser-window-close')
  browserWindowClose.innerText = '✕'
  browserWindowClose.addEventListener('click', closeWindow)

  browserWindowHeader.appendChild(browserWindowClose)
  browserWindowHeader.appendChild(browserWindowTitle)
  browserWindow.appendChild(browserWindowHeader)
  browserWindow.appendChild(browserWindowContent)

  const pseudoWindowWidth = windowWidth() * 0.8
  const pseudoWindowHeight = windowHeight() * 0.9

  const maxOffsetX = windowWidth() - pseudoWindowWidth
  const maxOffsetY = windowHeight() - pseudoWindowHeight

  const offsetX = maxOffsetX * Math.random()
  const offsetY = maxOffsetY * Math.random()

  browserWindow.style.position = 'absolute'
  browserWindow.style.left = `${offsetX}px`
  browserWindow.style.top = `${offsetY}px`
  browserWindow.style.zIndex = ++i

  document.getElementById('main').appendChild(browserWindow)
  makeDraggable(browserWindowHeader)
}

const navLinks = [...document.getElementsByClassName('nav-link')]

navLinks.forEach(el =>
  el.addEventListener('click', e => {
    e.preventDefault()

    const title = el.innerText
    const state = history.state
    const openWindows = (state && state.windows) || []

    fetch(el.href)
      .then(d => d.text())
      .then(content => createWindow(content, title))
      .then(() =>
        history.pushState({windows: [...openWindows, title]}, '@shwilliam'),
      )
  }),
)

// TODO: DRY up fetch & create pseudo window

// open pseudo windows from history state
const historyState = history.state
const openWindows = historyState && historyState.windows

openWindows &&
  openWindows.forEach(windowTitle =>
    fetch(`${document.location}${windowTitle}`)
      .then(d => d.text())
      .then(content => createWindow(content, windowTitle)),
  )
