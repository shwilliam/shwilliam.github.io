// TODO: handle no js

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

const closeWindow = e => closest(e.target, '.browser-window').remove()

// welcome window
const welcomeWindowCloseBtn = document.getElementById('welcome-close')
welcomeWindowCloseBtn.addEventListener('click', closeWindow)

const welcomeWindowHeader = document.getElementById('welcome-header')
makeDraggable(welcomeWindowHeader)

// window create
let amountOpened = 0
const createWindow = (content, title) => {
  const browserWindow = document.createElement('div')
  browserWindow.classList.add('browser-window')
  browserWindow.classList.add('scrollable')

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
  browserWindow.style.zIndex = ++amountOpened

  document.getElementById('main').appendChild(browserWindow)
  makeDraggable(browserWindowHeader)
}

const navLinks = [...document.getElementsByClassName('nav-link')]

navLinks.forEach(el =>
  el.addEventListener('click', e => {
    e.preventDefault()

    fetch(el.href)
      .then(d => d.text())
      .then(content => createWindow(content, el.innerText))
  }),
)
