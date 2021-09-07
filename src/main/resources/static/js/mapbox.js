import * as KEYS from "./keys.js";

mapboxgl.accessToken = KEYS;



export function Mapbox() {
    mapboxgl.accessToken = KEYS
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
}

// addGeocoder();
// mapEvent();
// setGeocoder();
// addGeocodeToMap(geocoder);
// setMarker(point);
// mapEvent();
// displayPopup(textdetails);


let marker;


// let geocoder = setGeocoder();
AddGeocoder();
addGeocodeToMap(geocoder);


export default function AddGeocoder() {
    var geocoder = new MapboxGeocoder({ accessToken: mapboxgl.accessToken });
    geocoder.addTo('#geocoder-container');
}


function setGeocoder() {

    // searchbox for map
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    });
}


function addGeocodeToMap(geocoder) {

    map.addControl(geocoder);

    // display results when search
    geocoder.on('result', function (event) {

        console.log(event.result.place_name);
        console.log(event);

        setMarker(event.result.geometry.coordinates);
        marker.setPopup(displayPopup(event.result.place_name));

    });
}

function setMarker(point) {

    if (!marker) {
        marker = new mapboxgl.Marker().setLngLat(point).addTo(map);
    } else {
        marker.setLngLat(point);
    }
}

function mapEvent() {

    map.on('click', function (event) {

        setMarker(event.lngLat);
        setMarker(event.lngLat.lng,);
        setMarker(event.lngLat.lat);

    })
}

function displayPopup(textDetails) {

    return new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);
}
