import { scaleBand, scaleLinear } from 'd3-scale';

//Getting width and height from a variable rather than the elements attribute e.g. svg.attr("width")
const svg = {
	svgWidth: 960,
  svgHeight: 500,
  margin: { top: 20, right: 20, bottom: 100, left: 45 },
  width: 895,
  height: 380,
  x: scaleBand().rangeRound([895, 0]).padding(0.1),
  y: scaleLinear().rangeRound([380, 0]),
}

export default svg;