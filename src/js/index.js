const xValues = []
const yValues = []

for (let x = 0; x <= 10; x++) {
  xValues.push(x)
  yValues.push(x)
}

let data = [{
  x: xValues,
  y: yValues,
  mode: "lines"
}]

let layout = {
  title: "y = x",
}

Plotly.newPlot("myPlot", data, layout)