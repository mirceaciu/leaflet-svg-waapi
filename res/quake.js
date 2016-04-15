var cssIcon = L.divIcon({
		  // Specify a class name we can refer to in CSS.
		  className: 'css-icon',
		  html: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="-25 -25 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><circle id="fill" fill="#ED1C24" cx="0" cy="0" r="4"/></svg>'
		  // Set marker width and height
		  ,iconSize: [50,50]
		  ,iconAnchor: [50,50]
		});


L.marker([45.7553,  26.5355], {icon: cssIcon}).addTo(map);
var player = document.getElementById('fill').animate([
		 {transform: 'scale(0)', opacity: 1},
    {transform: 'scale(2)', opacity: .7}
	], {
		duration: 700, //milliseconds
		easing: 'ease-in-out', //'linear', a bezier curve, etc.
		delay: 1, //milliseconds
		iterations: Infinity, //or a number
		direction: 'normal', //'normal', 'reverse', etc.
		fill: 'auto' //'backwards', 'both', 'none', 'auto'
	});


map.on('zoomend', function() {
      console.log(map.getZoom());
});
