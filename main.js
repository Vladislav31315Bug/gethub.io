console.log('Hello');

$('.js-testimonials-content-slider-wrap').slick({
	dots: true,
	arrows: false,
});


let options = {
	animationEnabled: true,
	exportEnabled: true,
	data: [
	{
		type: "spline", //change it to line, area, column, pie, etc
		dataPoints: [
			{ x: -100, y: 50 },
			{ x: -11, y: 83},
			{ x: 130, y: 60 },
			{ x: 290, y: 73 },
			{ x: 450, y: 57 },
			{ x: 590, y: 96 },
			{ x: 720, y: 56 },
			{ x: 880, y: 82 },
			{ x: 1000, y: 50 },
		]
	}
	]
};


$('.js-my-skills-content-graph').CanvasJSChart(options);

