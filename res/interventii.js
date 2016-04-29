// Create the map
var map = L.map('map').setView([44.189712764154756, 28.640499114990234], 14);

// Set up the OSM layer
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom: 18}).addTo(map);

var masvg = "<svg version='1.1' class='masvg' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50px' height='50px' viewBox='-25 -25 50 50' enable-background='new 0 0 50 50' xml:space='preserve'><circle id='fill' fill='#ED1C24' cx='0' cy='0' r='4'/></svg>";


var ambulanceClass = L.divIcon({
		  className: "ambulance-class",
		  html: masvg,
		  iconSize: [20,20],
		  iconAnchor: [20,20]
});

var ambulanceClass2 = L.divIcon({
		  className: "ambulance-class2",
		  html: masvg,
		  iconSize: [20,20],
		  iconAnchor: [20,20]
});

var interventionClass = L.divIcon({
		  className: "intervention-class",
		  html: masvg,
		  iconSize: [20,20],
		  iconAnchor: [20,20]
});

var interventionClass2 = L.divIcon({
		  className: "intervention-class2",
		  html: masvg,
		  iconSize: [20,20],
		  iconAnchor: [20,20]
});

pointArray = [];
var geojsonLayer = L.geoJson(masini, {
    pointToLayer: function(feature, latlng) {
        var marker = new L.Marker(latlng);
				pointArray.push(marker);
				return marker;
		}
});

for (var i=0; i < pointArray.length; i++){
	if (pointArray[i].feature.properties.tip_util === "ambulanta"){
		if(pointArray[i].feature.properties.status === "liber"){
				var marker2 = new L.Marker(pointArray[i]._latlng, {icon: ambulanceClass, draggable:'true'}).bindPopup(pointArray[i].feature.properties.tip_util).addTo(map);
			}else {
				var marker2 = new L.Marker(pointArray[i]._latlng, {icon: ambulanceClass2}).bindPopup(pointArray[i].feature.properties.tip_util).addTo(map);
			}
	} else {
		if(pointArray[i].feature.properties.status === "liber"){
		var marker3 = new L.Marker(pointArray[i]._latlng, {icon: interventionClass, draggable:'true'}).bindPopup(pointArray[i].feature.properties.tip_util).addTo(map);
	}else {
		var marker3 = new L.Marker(pointArray[i]._latlng, {icon: interventionClass2}).bindPopup(pointArray[i].feature.properties.tip_util).addTo(map);}
	};
};

function interventiiAnim(){
	for (j=0; j < 17; j++){
		var player = document.getElementsByClassName("intervention-class")[j].getElementsByTagName('svg')[0].animate([
				 {transform: 'scale(1)'},
				{transform: 'scale(2.5)'}
			], {
				duration: 700, //milliseconds
				easing: 'ease-in-out', //'linear', a bezier curve, etc.
				delay: 1, //milliseconds
				iterations: Infinity, //or a number
				direction: 'alternate', //'normal', 'reverse', etc.
				fill: 'auto' //'backwards', 'both', 'none', 'auto'
			});
	};

	for (k=0; k < 8; k++){
		var player2 = document.getElementsByClassName("intervention-class2")[k].getElementsByTagName('svg')[0].animate([
				 {transform: 'scale(1)', opacity: 1},
				{transform: 'scale(2.5)', opacity: .7}
			], {
				duration: 700, //milliseconds
				easing: 'ease-in-out', //'linear', a bezier curve, etc.
				delay: 1, //milliseconds
				iterations: Infinity, //or a number
				direction: 'alternate', //'normal', 'reverse', etc.
				fill: 'auto' //'backwards', 'both', 'none', 'auto'
			});
	}


};

function ambulanteAnim(){
	for (j=0; j < 5; j++){
		var player = document.getElementsByClassName("ambulance-class")[j].getElementsByTagName('svg')[0].animate([
				 {transform: 'scale(1)'},
				{transform: 'scale(3)'}
			], {
				duration: 700, //milliseconds
				easing: 'ease-in-out', //'linear', a bezier curve, etc.
				delay: 1, //milliseconds
				iterations: 1, //or a number
				direction: 'normal', //'normal', 'reverse', etc.
				fill: 'auto' //'backwards', 'both', 'none', 'auto'
			});

				document.getElementsByClassName("ambulance-class")[j].getElementsByTagName('svg')[0].style.transform = "scale(3,3)"
	};

	for (p=0; p < 6; p++){
		var player3 = document.getElementsByClassName("ambulance-class2")[p].getElementsByTagName('svg')[0].animate([
				 {transform: 'scale(1)'},
				{transform: 'scale(3)'}
			], {
				duration: 700, //milliseconds
				easing: 'ease-in-out', //'linear', a bezier curve, etc.
				delay: 1, //milliseconds
				iterations: 1, //or a number
				direction: 'normal', //'normal', 'reverse', etc.
				fill: 'auto' //'backwards', 'both', 'none', 'auto'
			});
				document.getElementsByClassName("ambulance-class2")[p].getElementsByTagName('svg')[0].style.transform = "scale(3,3)"
	}
};

function colorMe(){
	for (j=0; j < 5; j++){
		document.getElementsByClassName("ambulance-class")[j].getElementsByTagName('svg')[0].getElementById('fill').style.fill = "blue"
}};

function colorMe2(){
	for (g=0; g < 17; g++){
		document.getElementsByClassName("intervention-class")[g].getElementsByTagName('svg')[0].getElementById('fill').style.fill = "green"
}};
