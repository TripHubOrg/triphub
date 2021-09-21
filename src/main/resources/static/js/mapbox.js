import * as KEYS from "../js/keys.js"
import {attractionsRequest} from "./views/Attractions.js";
import createView from "./createView.js";

mapboxgl.accessToken = KEYS.mapboxKey();
let map;
let geocoder;
let marker;
let lonlat;

export default function Mapbox() {
	map = createMapbox();
	geocoder = createGeocoder();
	setGeocoder();
	addGeocodeToMap(geocoder)
	// setMarker()
	// mapEvent();
	// displayPopup()
}

export function createMapbox() {
	return new mapboxgl.Map({
		container: 'map', // container ID
		style: 'mapbox://styles/mapbox/dark-v10', // style URL
		center: [-96.283496, 37.230328], // starting position [lng, lat]
		zoom: 3.5// starting zoom
	});
}

export function createGeocoder() {
	return new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl,
		marker: false
	});
}

export function setGeocoder() {
	// searchbox for map
	return new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl,
		marker: false
	});
}

function addGeocodeToMap(geocoder) {
	map.addControl(geocoder);
	geocoder.addTo('#geocoder-container');

	// display results when search
	geocoder.on('result', function (event) {
		console.log(event);
		lonlat = event.result.geometry.coordinates;
		console.log(lonlat)
		attractionsRequest(lonlat)

		setMarker(event.result.geometry.coordinates);
		marker.setPopup(displayPopup(event.result.place_name));

	});
}

export function MapBoxCoordinates(){
	return lonlat;
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
