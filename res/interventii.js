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

var interventionClass = L.divIcon({
		  className: "invervention-class",
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
		var marker2 = new L.Marker(pointArray[i]._latlng, {icon: ambulanceClass}).bindPopup(pointArray[i].feature.properties.tip_util).openPopup().addTo(map);
	} else {
		var marker3 = new L.Marker(pointArray[i]._latlng, {icon: interventionClass}).bindPopup(pointArray[i].feature.properties.tip_util).openPopup().addTo(map);
	}
};