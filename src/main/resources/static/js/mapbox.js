mapboxgl.accessToken = token;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
let marker;

mapEvent();

let geocoder = setGeocoder();
addGeocodeToMap(geocoder);

function setGeocoder(){

    // searchbox for map
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    });
}


function addGeocodeToMap(geocoder){

    map.addControl(geocoder);

    // display results when search
    geocoder.on('result', function (event) {

        console.log(event.result.place_name);
        console.log(event);

        setMarker(event.result.geometry.coordinates);
        marker.setPopup(displayPopup(event.result.place_name));

        fetchForecast(event.result.geometry.coordinates);

    });
}

function setMarker(point) {

    if(!marker){
        marker = new mapboxgl.Marker().setLngLat(point).addTo(map);
    } else {
        marker.setLngLat(point);
    }
}

function mapEvent() {

    map.on('click', function (event) {

        setMarker(event.lngLat);

        fetchForecast([event.lngLat.lng, event.lngLat.lat]);
    })
}

function displayPopup(textDetails){

    return new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);
}