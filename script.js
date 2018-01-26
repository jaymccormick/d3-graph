var nodes = [
  [10, 20],
  [10, 70],
  [50, 70],
  [90, 100]
];

var links = [
  {source: nodes[0], target: nodes[2]},
  {source: nodes[1], target: nodes[2]},
  {source: nodes[2], target: nodes[3]}
];

var screens = [
  'search',
  'results',
  'details'
];

var connections = [
  {source: screens[0], target: screens[1]},
  {source: screens[1], target: screens[2]}
];
console.log(screens.indexOf(connections[1].source));
var width = 700;
var height = 500;

var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

svg.selectAll("circle .node")
    .data(screens)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("cx", (d, i) => i * 50 + 10)
    .attr("cy", height / 2)
    .attr("r", 10);
var hundred = 100;

svg.selectAll("line .link")
    .data(connections)
    .enter()
    .append("line")
    .attr("class", "link")
    .attr("x1", d => screens.indexOf(d.source) * 50 + 10)
    .attr("x2", d => screens.indexOf(d.target) * 50 + 10)
    .attr("y1", height / 2)
    .attr("y2", height / 2)
    .attr("shape-rendering", "crispEdges")
    .style("stroke", "black");
