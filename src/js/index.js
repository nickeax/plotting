const slope = 1.2
const xValues = []
const yValues = []

for (let x = 0; x <= 10; x++) {
  xValues.push(x)
  yValues.push(x * slope)
}

let data = [{
  x: xValues,
  y: yValues,
  mode: "lines"
}]

let layout = {
  title: `Slope = ${slope}`,
}

Plotly.newPlot("myPlot", data, layout)