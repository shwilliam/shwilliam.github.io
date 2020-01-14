const htmlEl = document.firstElementChild
const themeToggleEl = document.getElementById('theme-toggle')
const prefersDark = false
// const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

htmlEl.dataset.theme = localStorage.getItem('theme')

themeToggleEl.addEventListener('click', () => {
  const theme = htmlEl.dataset.theme
    ? htmlEl.dataset.theme === 'light'
      ? 'dark'
      : 'light'
    : prefersDark
    ? 'light'
    : 'dark'

  htmlEl.dataset.theme = theme
  localStorage.setItem('theme', theme)
})
