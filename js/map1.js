mapboxgl.accessToken = 'pk.eyJ1IjoicGVkcm9ndWFyZCIsImEiOiJjazVvMW1xcDIxMWp3M21wNm56NjlwMWVvIn0.tPRS42iRj7raCUm95ADtvw';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
center: [-77.38, 39], // starting position
zoom: 3 // starting zoom
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
           enableHighAccuracy : true
        },
        trackUserLocation: true
    })
);

map.addControl(
    new mapboxgl.NavigationControl()
);
	
map.on('mousemove', function (e) {
    document.getElementById('coordenadas').innerHTML =
        JSON.stringify(e.lngLat);
});

map.on('click', function(e) {
    document.getElementById('coorde').innerHTML = 
    JSON.stringify(e.lngLat.wrap());

    var pokeball =document.createElement('div');
    pokeball.className = "pokeball";

var marker = new mapboxgl.Marker(pokeball)
     .setLngLat(e.lngLat.wrap())
     .addTo(map);
});

