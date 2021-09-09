import Mapbox from "../mapbox.js";

export default function Home(props) {
	return `
    <div class="container border shadow" id="homepage">
        <header>
            <h1>PLan A Trip</h1>
        </header>
        <main>
        	<div id="geocoder-container"></div>
   			<div id="map" style="height: 500px; width: 500px; visibility: collapse"></div>
        </main>
    </div>`;
}

export function BeginAllEvents() {
	Mapbox();
	// $('#homepage').load(function () {
	// 	Mapbox();
	// })
}

