;(() => {
  if (sessionStorage && sessionStorage.fontsLoaded) {
    document.documentElement.dataset.fonts = 'done'
  } else if ('fonts' in document) {
    Promise.all([
      document.fonts.load('1em MyAvenir'),
      document.fonts.load('500 1em MyAvenir'),
      document.fonts.load('italic 1em MyAvenir'),
    ]).then(() => {
      document.documentElement.dataset.fonts = 'done'
      sessionStorage.fontsLoaded = true
    })
  }
})()
