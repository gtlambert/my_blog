console.log('js filed is loading');

var options = {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : false,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: false,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: false,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
}

Chart.defaults.global = {
    // Boolean - Whether to animate the chart
    animation: true,

    // Number - Number of animation steps
    animationSteps: 60,

    // String - Animation easing effect
    animationEasing: "easeOutQuart",

    // Boolean - If we should show the scale at all
    showScale: true,

    // Boolean - If we want to override with a hard coded scale
    scaleOverride: true,

    // ** Required if scaleOverride is true **
    // Number - The number of steps in a hard coded scale
    scaleSteps: 5,
    // Number - The value jump in the hard coded scale
    scaleStepWidth: 17,
    // Number - The scale starting value
    scaleStartValue: 0,

    // String - Colour of the scale line
    // scaleLineColor: "rgba(0,0,0,.1)",
    scaleLineColor: 'transparent',

    // Number - Pixel width of the scale line
    scaleLineWidth: 0,

    // Boolean - Whether to show labels on the scale
    scaleShowLabels: true,

    // Interpolated JS string - can access value
    scaleLabel: function(val) {
    	return '';
    },

    // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
    scaleIntegersOnly: true,

    // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: false,

    // String - Scale label font declaration for the scale label
    scaleFontFamily: "'Montserrat', sans-serif",

    // Number - Scale label font size in pixels
    scaleFontSize: 12,

    // String - Scale label font weight style
    scaleFontStyle: "normal",

    // String - Scale label font colour
    scaleFontColor: "#666",

    // Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive: false,

    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,

    // Boolean - Determines whether to draw tooltips on the canvas or not
    showTooltips: true,

    // Array - Array of string names to attach tooltip events
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],

    // String - Tooltip background colour
    tooltipFillColor: "rgba(0,0,0,0.8)",

    // String - Tooltip label font declaration for the scale label
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip label font size in pixels
    tooltipFontSize: 14,

    // String - Tooltip font weight style
    tooltipFontStyle: "normal",

    // String - Tooltip label font colour
    tooltipFontColor: "#fff",

    // String - Tooltip title font declaration for the scale label
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip title font size in pixels
    tooltipTitleFontSize: 14,

    // String - Tooltip title font weight style
    tooltipTitleFontStyle: "bold",

    // String - Tooltip title font colour
    tooltipTitleFontColor: "#fff",

    // Number - pixel width of padding around tooltip text
    tooltipYPadding: 6,

    // Number - pixel width of padding around tooltip text
    tooltipXPadding: 6,

    // Number - Size of the caret on the tooltip
    tooltipCaretSize: 8,

    // Number - Pixel radius of the tooltip border
    tooltipCornerRadius: 6,

    // Number - Pixel offset from point x to tooltip edge
    tooltipXOffset: 10,

    // String - Template string for single tooltips
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

    // String - Template string for multiple tooltips
    multiTooltipTemplate: "<%= value %>",

    // Function - Will fire on animation progression.
    onAnimationProgress: function(){},

    // Function - Will fire on animation completion.
    onAnimationComplete: function(){}
}

var backendData = {
    labels: [ "Ruby", "Python", "Django", "Flask", "C++"],
    datasets: [
        {
            label: "Backend",
            fillColor: "rgba(255,153,0,0.5)",
            strokeColor: "rgba(255,153,0,0.5)",
            highlightFill: "rgba(255,153,0,0.8)",
            highlightStroke: "rgba(255,153,0,0.8)",
            data: [17, 84, 45, 28, 33]
        }
    ]
};

var frontendData = {
	labels: ['JavaScript', 'AngularJS', 'Sass', 'CSS', 'HTML5', 'Bootstrap', 'Foundation'],
	datasets: [
		{
			label: "Frontend",
			fillColor: "rgba(100,149,237,0.5)",
			strokeColor: "rgba(100,149,237,0.5)",
			highlightFill: "rgba(100,149,237,0.8)",
			highlightStroke: "rgba(100,149,237,0.8)",
			data: [40, 60, 36, 44, 45, 35, 47]
		}
	]
}

Chart.defaults.global.pointHitDetectionRadius = 1;
    Chart.defaults.global.customTooltips = function(tooltip) {

        var tooltipEl = $('#chartjs-tooltip');

        if (!tooltip) {
            tooltipEl.css({
                opacity: 0,
            });
            return;
        }

        tooltipEl.removeClass('above below');
        tooltipEl.addClass(tooltip.yAlign);
   
        

        console.log('the tooltip is');
        console.log(tooltip);
        console.log('the tooltip text is');
        console.log(tooltip.text);
        if (tooltip.text.startsWith('Python')) {
        	console.log('starts with python');
        	content = '<h4 class="text-center">Python</h4><br>' +
        			  '<p><strong>Maths:</strong> NumPy, Pandas, SciPy, matplotlib<br>' +
        			  '<strong>Scraping:</strong> lxml, Scrapy, BeautifulSoup, XPath, PyQuery<br>' + 
        			  '<strong>Testing</strong>: Selenium, PhantomJS<br>' +
        			  '<strong>Web Frameworks:</strong> Django, Flask<br>' +
        			  '<strong>Stack Overflow:</strong> Silver badge holder';
        } else if (tooltip.text.startsWith('Ruby')) {
        	console.log('starts with Ruby');
        	content = '<h4 class="text-center">Ruby</h4><br>' +
        			  '<p>I just know the basics!</p>';
        } else if (tooltip.text.startsWith('Django')) {
        	console.log('starts with Django');
        	content = '<h4 class="text-center">Django</h4><br>' + 
        			  '<p>Over a year of industry experience</p>';
        } else if (tooltip.text.startsWith('Flask')) {
        	console.log('starts with Flask');
        	content = '<h4 class="text-center">Flask</h4><br>' +
        		      '<p>Spent about 3 months learning Flask on<br>' +
        			  'the way to learning Django</p>';
        } else if (tooltip.text.startsWith('C++')) {
        	console.log('starts with C++');
        	content = '<h4 class="text-center">C++</h4><br>' + 
        			  '<p>A year of intensive use while studying<br>' + 
        			  'for an MSc at Imperial</p>';
        } else if (tooltip.text.startsWith('AngularJS')) {
        	console.log('starts with AngularJS');
        	content = '<h4 class="text-center">AngularJS</h4><br>' + 
        			   '<p>6 months of industry use.<br>' + 
        			   '<strong>Plugins:</strong> ui-grid, text angular,<br>' +
        			   'Angular file uploader, ui-select, anguautocomplete-alt</p>';
        } else if (tooltip.text.startsWith('JavaScript')) {
        	console.log('starts with JavaScript');
        	content = '<h4 class="text-center">JavaScript</h4><br>' +
        			  '<p>A year of experience.<br>' + 
        			  '<strong>Frameworks:</strong> JQuery, AngularJS<br>' +
        			  '<strong>Plugins:</strong> Chart.js, JQuery layout, ui-grid,<br>'+
        			  'ui-select, Text Angular, anguautocomplete-alt</p>'; 
        } else if (tooltip.text.startsWith('Sass')) {
        	console.log('starts with Sass');
        	content = '<h4 class="text-center">Sass</h4><br>' + 
        			  '<p>I use this to speed up my styling,<br>' + 
        			  'but this isn\'t where I focus my time.</p>';
        } else if (tooltip.text.startsWith('HTML')) {
        	console.log('starts with html');
        	content = '<h4 class="text-center">HTML5</h4><br>' + 
        			  '<p>18 months of regular use</p>';
        } else if (tooltip.text.startsWith('CSS')) {
        	console.log('starts with CSS');
        	content = '<h4 class="text-center">CSS</h4><br>' + 
        	          '<p>Getting better every day!</p>';
        } else if (tooltip.text.startsWith('Bootstrap')) {
        	console.log('starts with Bootstrap');
        	content = '<h4 class="text-center">Bootstrap</h4><br>' + 
        			  '<p>I enjoy using Bootstrap, but lack experience</p>';
        } else if (tooltip.text.startsWith('Foundation')) {
        	console.log('starts with Foundation');
        	content = '<h4 class="text-center">Foundation</h4><br>' +
        			  '<p>My styling framework of choice</p>';
        }	

        var innerHtml = '<div>' + content + '</div>';
		tooltipEl.html(innerHtml);

        tooltipEl.css({
            opacity: 1,
            left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',
            top: tooltip.chart.canvas.offsetTop + tooltip.y + 'px',
            fontFamily: tooltip.fontFamily,
            fontSize: tooltip.fontSize,
            fontStyle: tooltip.fontStyle,
        });
    };

$(document).ready(function() {
	var backend = document.getElementById("backend").getContext("2d");
	var backendChart = new Chart(backend).Bar(backendData, options);	

	var frontend = document.getElementById("frontend").getContext("2d");
	var frontendChart = new Chart(frontend).Bar(frontendData, options);
});