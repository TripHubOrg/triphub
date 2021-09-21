import Mapbox from "../mapbox.js";

export default function Home(props) {
	return `
	<div class=" home-content container">
		<div class="container-fluid">
			<div class="row d-flex justify-center align-self-center my-5">
				<div class="col col-md-12 " id="homepage">
					<header>
						<h1 class="d-flex justify-content-center mt-2 mb-2">PLAN A TRIP</h1>
					</header>
					<div class="description d-flex justify-content-center">Search for a City...</div>
					<div id="geocoder-container" class="d-flex justify-content-center mt-1 mb-5"></div>
					<div id="map" style="visibility: collapse"></div>
					<div class="bg-image" style="background-image: url('../static/assets/blonde-1867768_1920.jpg')"></div>
<!--					<img src="../assets/blonde-1867768_1920.jpg" alt="" class="home-img">-->
				</div>
			</div>
		</div>
	</div>
`;
}

export function BeginAllEvents() {
	Mapbox();
	addBackgroundImage()
}

function addBackgroundImage(){
	$('#app').addClass('home-img')
}



