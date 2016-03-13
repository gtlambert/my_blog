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

var data = {
    labels: ['Heroku', '            Google App Engine', 'AWS',
             'Git', 'GitHub', 'Bitbucket', 'Gulp', 'Grunt',
             'SQL', 'MongoDB',
             
             'JavaScript', 'AngularJS', 'Sass', 'CSS', 'HTML5', 'Bootstrap', 'Foundation',
             'Ruby', "Python", "Django", "Flask", "C++"],
    datasets: [
        {
            label: "Backend",
            fillColor: "rgba(255,153,0,0.5)",
            strokeColor: "rgba(255,153,0,0.5)",
            highlightFill: "rgba(255,153,0,0.8)",
            highlightStroke: "rgba(255,153,0,0.8)",
            data: [50, 10, 10,
            63, 57, 45, 67, 22,
                   15, 15,
                   
                   40, 60, 36, 44, 45, 35, 47,
                   17, 84, 45, 28, 33]
        }
    ]
};

Chart.defaults.global.pointHitDetectionRadius = 5;
Chart.defaults.global.customTooltips = function(tooltip) {
    console.log('in the tooltip function');

    var tooltipEl = $('#chartjs-tooltip');

    if (!tooltip) {
        tooltipEl.css({
            opacity: 0,
        });
        return;
    }

    tooltipEl.removeClass('above below');
    tooltipEl.addClass(tooltip.yAlign);

    if (tooltip.text.replace(/ /g,'').startsWith('Python')) {
    	content = '<h4 class="text-center">Python</h4><br>' +
    			  '<p><strong>Maths:</strong> NumPy, Pandas, SciPy, matplotlib<br>' +
    			  '<strong>Scraping:</strong> lxml, Scrapy, BeautifulSoup, XPath, PyQuery<br>' + 
    			  '<strong>Testing</strong>: Selenium, PhantomJS<br>' +
    			  '<strong>Web Frameworks:</strong> Django, Flask<br>' +
    			  '<strong>Stack Overflow:</strong> Silver badge holder';
    } else if (tooltip.text.replace(/ /g,'').startsWith('Ruby')) {
    	content = '<h4 class="text-center">Ruby</h4><br>' +
    			  '<p>I just know the basics!</p>';
    } else if (tooltip.text.replace(/ /g,'').startsWith('Django')) {
    	content = '<h4 class="text-center">Django</h4><br>' + 
    			  '<p>Over a year of industry experience</p>';
    } else if (tooltip.text.replace(/ /g,'').startsWith('Flask')) {
    	content = '<h4 class="text-center">Flask</h4><br>' +
    		      '<p>Spent about 3 months learning Flask on ' +
    			  'the way to learning Django</p>';
    } else if (tooltip.text.replace(/ /g,'').startsWith('C++')) {
    	content = '<h4 class="text-center">C++</h4><br>' + 
    			  '<p>A year of intensive use while studying ' + 
    			  'for an MSc at Imperial</p>';
    } else if (tooltip.text.replace(/ /g,'').startsWith('AngularJS')) {
    	content = '<h4 class="text-center">AngularJS</h4><br>' + 
    			   '<p>6 months of industry use.<br>' + 
    			   '<strong>Plugins:</strong> ui-grid, text angular, ' +
    			   'Angular file uploader, ui-select, anguautocomplete-alt</p>';
    } else if (tooltip.text.replace(/ /g,'').startsWith('JavaScript')) {
    	content = '<h4 class="text-center">JavaScript</h4><br>' +
    			  '<p>A year of experience.<br>' + 
    			  '<strong>Frameworks:</strong> JQuery, AngularJS<br>' +
    			  '<strong>Plugins:</strong> Chart.js, JQuery layout, ui-grid, '+
    			  'ui-select, Text Angular, anguautocomplete-alt</p>'; 
    } else if (tooltip.text.replace(/ /g,'').startsWith('Sass')) {
    	content = '<h4 class="text-center">Sass</h4><br>' + 
    			  '<p>I use this to speed up my styling, ' + 
    			  'but this isn\'t where I focus my time.</p>';
    } else if (tooltip.text.replace(/ /g,'').startsWith('HTML')) {
    	content = '<h4 class="text-center">HTML5</h4><br>' + 
    			  '<p>18 months of regular use</p>';
    } else if (tooltip.text.replace(/ /g,'').startsWith('CSS')) {
    	content = '<h4 class="text-center">CSS</h4><br>' + 
    	          '<p>Getting better every day!</p>';
    } else if (tooltip.text.replace(/ /g,'').startsWith('Bootstrap')) {
    	content = '<h4 class="text-center">Bootstrap</h4><br>' + 
    			  '<p>I enjoy using Bootstrap, but lack experience</p>';
    } else if (tooltip.text.replace(/ /g,'').startsWith('Foundation')) {
    	content = '<h4 class="text-center">Foundation</h4><br>' +
    			  '<p>My styling framework of choice</p>';
    } else if (tooltip.text.replace(/ /g,'').startsWith('AWS')) {
        content = '<h4 class="text-center">AWS</h4><br>' + 
                   '<p>I know the basics</p>';
    } else if (tooltip.text.replace(/ /g,'').startsWith('Google')) {
        content = '<h4 class="text-center">Google App Engine</h4><br>' + 
                  '<p>Haven\'t got too much past "Hello World" ' + 
                  'apps in Django and Flask</p>';            
    } else if (tooltip.text.replace(/ /g,'').startsWith('Heroku')) {
        content = '<h4 class="text-center">Heroku</h4><br>' + 
                  '<p>My go to PaaS provider. I\'ve used ' + 
                  'Heroku for multiple work and personal Django ' +
                  'and Flask projects for over a year</p>'
    } else if (tooltip.text.replace(/ /g,'').startsWith('GitH')) {
        content = '<h4 class="text-center">GitHub</h4><br>' + 
                  '<p>My go to repository hosting service for both work and personal projects</p>';
    } else if (tooltip.text.replace(/ /g,'').startsWith('Git')) {
        content = '<h4 class="text-center">Git</h4><br>' + 
                  '<p>100% confident using Git as my VCS.</p>'
    } else if (tooltip.text.replace(/ /g,'').startsWith('Bitbucket')) {
        content = '<h4 class="text-center">Bitbucket</h4><br>' + 
                  '<p>The repository hosting service I use if I need something free and private!</p>';
    } else if (tooltip.text.replace(/ /g,'').startsWith('Gulp')) {
        content = '<h4 class="text-center">Gulp</h4><br>' + 
                  '<p>My go to task runner.</p>';
    } else if (tooltip.text.replace(/ /g,'').startsWith('Grunt')) {
        content = '<h4 class="text-center">Grunt</h4><br>' + 
                  '<p>Not my first choice task runner, but I use it in projects set up by Grunters</p>';
    } else if (tooltip.text.replace(/ /g,'').startsWith('SQL')) {
        content = '<h4 class="text-center">SQL</h4><br>' +
                  '<p>I know the CRUD and querying basics, but usually use a Python hook - either Django or Flask with PostgreSQL</p>';
    } else if (tooltip.text.replace(/ /g,'').startsWith('MongoDB')) {
        content = '<h4 class="text-center">MongoDB</h4><br>' +
                  '<p>I know the CRUD and querying basics, but usually use a Python hook - either Django or Flask with PostgreSQL</p>'
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
	var graph = document.getElementById("graph").getContext("2d");
	var graphChart = new Chart(graph).HorizontalBar(data, options);	
    for (var idx = 0; idx < graphChart.datasets[0].bars.length; idx++) {

        if (idx <= data.labels.indexOf('AWS')) {
            graphChart.datasets[0].bars[idx].fillColor = "rgba(192,192,192,0.5)";
            graphChart.datasets[0].bars[idx].strokeColor = "rgba(192,192,192,0.5)";
            graphChart.datasets[0].bars[idx].highlightFill = "rgba(192,192,192,0.8)";
            graphChart.datasets[0].bars[idx].highlightStroke = "rgba(192,192,192,0.8)";
        } else if (idx <= data.labels.indexOf('Grunt')) {
            graphChart.datasets[0].bars[idx].fillColor = "rgba(100,149,237,0.5)";
            graphChart.datasets[0].bars[idx].strokeColor = "rgba(100,149,237,0.5)";
            graphChart.datasets[0].bars[idx].highlightFill = "rgba(100,149,237,0.8)";
            graphChart.datasets[0].bars[idx].highlightStroke = "rgba(100,149,237,0.8)";
        } else if (idx <= data.labels.indexOf('MongoDB')) {
            graphChart.datasets[0].bars[idx].fillColor = "rgba(0,204,102,0.5)";
            graphChart.datasets[0].bars[idx].strokeColor = "rgba(0,204,102,0.5)";
            graphChart.datasets[0].bars[idx].highlightFill = "rgba(0,204,102,0.8)";
            graphChart.datasets[0].bars[idx].highlightStroke = "rgba(0,204,102,0.8)";
        } else if (idx <= data.labels.indexOf('Foundation')) {
            graphChart.datasets[0].bars[idx].fillColor = "rgba(204,0,102,0.5)";
            graphChart.datasets[0].bars[idx].strokeColor = "rgba(204,0,102,0.5)";
            graphChart.datasets[0].bars[idx].highlightFill = "rgba(204,0,102,0.8)";
            graphChart.datasets[0].bars[idx].highlightStroke = "rgba(204,0,102,0.8)";
        } else if (idx <= data.labels.indexOf('C++')) {
            graphChart.datasets[0].bars[idx].fillColor = "rgba(255,153,0,0.5)";
            graphChart.datasets[0].bars[idx].strokeColor = "rgba(255,153,0,0.5)";
            graphChart.datasets[0].bars[idx].highlightFill = "rgba(255,153,0,0.8)";
            graphChart.datasets[0].bars[idx].highlightStroke = "rgba(255,153,0,0.8)";
        }
    }
    graphChart.update();
});



