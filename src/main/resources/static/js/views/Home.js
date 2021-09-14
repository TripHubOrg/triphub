import Mapbox from "../mapbox.js";

export default function Home(props) {
	return `
	<div class="container d-flex justify-center my-5">
		<div class="container border shadow" id="homepage">
			<header>
				<h1 class="d-flex justify-content-center align-self-center mt-2 mb-5">PLAN A TRIP</h1>
			</header>
			<main>
				<div id="geocoder-container" class="d-flex justify-content-center my-5"></div>
				<div id="map" style="visibility: collapse"></div>
			</main>
		</div>
	</div>`;
}

export function BeginAllEvents() {
	Mapbox();

}



