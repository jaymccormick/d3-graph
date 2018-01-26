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

var width = 700;
var height = 500;

var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

svg.selectAll("circle .node")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("cx", d => d[0] * 5 + 20)
    .attr("cy", d => d[1])
    .attr("r", 10);

svg.selectAll("line .link")
    .data(links)
    .enter()
    .append("line")
    .attr("class", "link")
    .attr("x1", d => d.source[0] * 5 + 20)
    .attr("x2", d => d.target[0] * 5 + 20)
    .attr("y1", d => d.source[1])
    .attr("y2", d => d.target[1])
    .attr("shape-rendering", "crispEdges")
    .style("stroke", "black");
