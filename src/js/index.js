const slope = 1.2
const intercept = 4
const xValues = []
const yValues = []

for (let x = 0; x <= 10; x++) {
  xValues.push(x)
  yValues.push((x * slope) + intercept)
}

let data = [{
  x: xValues,
  y: yValues,
  mode: "lines"
}]

let layout = {
  title: `[Slope:${slope} | Intercept:${intercept}]`,
}

Plotly.newPlot("myPlot", data, layout)