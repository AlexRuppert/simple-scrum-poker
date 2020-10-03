let cards = [0, 1, 2, 3, 5, 8, 13, 20, 40, 100]
const body = document.body
const overlay = document.getElementById('c')
const ctx = document.createElement('canvas').getContext('2d')

const template = document.createElement('a')
template.href = '#c'
let seed = 0

const query = new URL(window.location.href).searchParams.get('q')
if (query) cards = query.split(/[,;]/g)

const colors = [
  '86a',
  '27e',
  '09a',
  '079',
  '088',
  '086',
  'd5b',
  'c57',
  'c75',
  '112',
]
const getColor = () => {
  seed = seed > colors.length ? (seed = 0) : seed
  return '#' + colors[seed++]
}

const getSize = (prop, text, size) => {
  ctx.font = `${size}px sans-serif`
  const metrics = ctx.measureText(text)
  return prop === 'width'
    ? metrics.width
    : metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
}

const findFontSize = (text, init, width, height) => {
  text = text.length < 2 ? text + 'a' : text
  return Math.min(
    init * (1 / (getSize('width', text, init) / width)) * 0.7,
    init * (1 / (getSize('height', text, init) / height)) * 0.55,
  )
}

const setValues = (item, text, color, dimensions) => {
  item.style.background = color
  item.innerText = text
  item.setAttribute('draggable', 'false')
  item.style.fontSize = `${findFontSize(
    text,
    60,
    dimensions.width,
    dimensions.height,
  )}px`
}
cards.forEach((text) => {
  const clone = template.cloneNode()
  const color = getColor()
  setValues(clone, text, color, { width: 100, height: 120 })

  clone.addEventListener('click', () => {
    setValues(overlay, text, color, {
      width: window.innerWidth,
      height: window.innerHeight,
    })
  })
  body.appendChild(clone)
})
