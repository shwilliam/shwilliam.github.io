;(() => {
  const htmlEl = document.firstElementChild
  const themeToggleEls = [...document.getElementsByClassName('theme-toggle')]
  const prefersDark = false
  // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  themeToggleEls.forEach(el =>
    el.addEventListener('click', () => {
      const theme = htmlEl.dataset.theme
        ? htmlEl.dataset.theme === 'light'
          ? 'dark'
          : 'light'
        : prefersDark
        ? 'light'
        : 'dark'

      htmlEl.dataset.theme = theme
      localStorage.setItem('theme', theme)
    }),
  )
})()
