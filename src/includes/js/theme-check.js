;(() => {
  const htmlEl = document.firstElementChild
  htmlEl.dataset.theme = localStorage.getItem('theme')
})()
