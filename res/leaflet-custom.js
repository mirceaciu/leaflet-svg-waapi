// Create the map
var map = L.map('map').setView([44.42562793818246, 26.069784164428707], 12);

// Set up the OSM layer
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom: 18}).addTo(map);
