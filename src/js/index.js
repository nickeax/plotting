function XYPlotter(id) {
  this.canvas = document.getElementById(id)
  this.ctx = this.canvas.getContext("2d")
  this.xMin = 0
  this.yMin = 0
  this.xMax = this.canvas.width
  this.yMax = this.canvas.height

  this.plotLine = function (x0, y0, x, y, color) {
    this.ctx.moveTo(x0, y0)
    this.ctx.lineTo(x, y)
    this.ctx.strokeStyle = color
    this.ctx.stroke()
  }

  this.transformXY = function () {
    this.ctx.transform(1, 0, 0, -1, this.canvas.height)
  }

  this.plotPoints = function (data, color, radius = 3) {
    for (let i = 0; i < data.length; i++) {
      this.ctx.fillStyle = color
      this.ctx.beginPath()
      this.ctx.ellipse(data[i].x, data[i].y, radius, radius, 0, 0, Math.PI * 2)
      this.ctx.fill()
    }
  }

  return this
}
const plotter = new XYPlotter('canvas1')
const lowerX = 0
const upperX = 900
const lowerY = 0
const upperY = 900
const dataAmount = 1000

const dataArray = randomData(dataAmount, lowerX, upperX)

plotter.plotPoints(dataArray, 'red')

function randomData(n, lower, upper) {
  let arr = []
  for (let i = 0; i < n; i++) {
    let dataPoint = { "x": 0, "y": 0 }
    dataPoint.x = Math.floor(Math.random() * (upper - lower)) + lower
    dataPoint.y = Math.floor(Math.random() * (upper - lower)) + lower
    arr.push(dataPoint)
  }
  return arr
}
