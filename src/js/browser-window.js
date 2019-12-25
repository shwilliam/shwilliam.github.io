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

const closeWindow = e => closest(e.target, '.browser-window').remove()

const welcomeWindowCloseBtn = document.getElementById('welcome-close')

welcomeWindowCloseBtn.addEventListener('click', closeWindow)

const createWindow = content => {
  const browserWindow = document.createElement('div')
  browserWindow.classList.add('browser-window')
  browserWindow.classList.add('scrollable')

  const browserWindowContent = document.createElement('div')
  browserWindowContent.classList.add('browser-window-content')
  browserWindowContent.innerHTML = content

  const browserWindowHeader = document.createElement('div')
  browserWindowHeader.classList.add('browser-window-header')

  const browserWindowClose = document.createElement('button')
  browserWindowClose.classList.add('browser-window-close')
  browserWindowClose.innerText = '✕'
  browserWindowClose.addEventListener('click', closeWindow)

  browserWindowHeader.appendChild(browserWindowClose)
  browserWindow.appendChild(browserWindowHeader)
  browserWindow.appendChild(browserWindowContent)

  browserWindow.style.position = 'absolute'
  browserWindow.style.top = 0

  document.getElementById('main').appendChild(browserWindow)
}

const navLinks = [...document.getElementsByClassName('nav-link')]

navLinks.forEach(el =>
  el.addEventListener('click', e => {
    e.preventDefault()

    fetch(el.href)
      .then(d => d.text())
      .then(createWindow)
  }),
)
