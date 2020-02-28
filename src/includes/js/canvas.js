;(() => {
  const canvas = document.getElementById('canvas')
  const canvasContainer = document.getElementById('canvas-container')
  const canvasSubmit = document.getElementById('canvas-submit')
  const canvasReset = document.getElementById('canvas-reset')

  if (!canvas.getContext) return

  const ctx = canvas.getContext('2d')
  let isDrawing = false
  let targetX
  let targetY
  let canvasRect
  const strokeWidth = 3

  const resizeCanvas = () => {
    canvasRect = canvasContainer.getBoundingClientRect()

    canvas.width = canvasRect.width
    canvas.height = canvasRect.height
  }

  const drawDot = (ctx, x, y, size) => {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fill()
  }

  const submitDrawing = () => {
    const drawingUri = canvas.toDataURL()
    console.log(drawingUri)
  }

  const resetDrawing = () => {
    clearDrawing(canvas, ctx)
    canvasContainer.dataset.touched = false
  }

  const clearDrawing = (canvas, ctx) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  const moveStart = () => {
    isDrawing = true
    canvasContainer.dataset.touched = true

    const strokeColor =
      document.documentElement.dataset.theme === 'dark' ? '#f55' : '#2a7ae2'

    ctx.beginPath()
    ctx.lineWidth = strokeWidth
    ctx.lineCap = 'round'
    ctx.fillStyle = strokeColor
    ctx.strokeStyle = strokeColor
  }

  const moveEnd = () => {
    isDrawing = false
  }

  const touchMove = e => {
    getTargetPos(e)

    if (isDrawing) drawDot(ctx, targetX, targetY, strokeWidth)
  }

  const mouseMove = e => {
    getTargetPos(e)

    if (isDrawing) {
      ctx.lineTo(e.clientX - canvasRect.left, e.clientY - canvasRect.top)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(e.clientX - canvasRect.left, e.clientY - canvasRect.top)
    }
  }

  function getTargetPos(e) {
    if (e.offsetX) {
      targetX = e.offsetX
      targetY = e.offsetY
    } else if (e.layerX) {
      targetX = e.layerX
      targetY = e.layerY
    }
  }

  if (ctx) {
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas, false)

    canvas.addEventListener('touchstart', moveStart, false)
    canvas.addEventListener('touchmove', touchMove, false)
    window.addEventListener('touchend', moveEnd, false)

    canvas.addEventListener('mousedown', moveStart, false)
    canvas.addEventListener('mousemove', mouseMove, false)
    window.addEventListener('mouseup', moveEnd, false)

    canvasSubmit.addEventListener('click', submitDrawing, false)
    canvasReset.addEventListener('click', resetDrawing, false)
  }
})()
