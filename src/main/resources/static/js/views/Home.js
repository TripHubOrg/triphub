import Mapbox from "../mapbox.js";

export default function Home(props) {
	return `
	<div class="home-content container vh-100 p-0">
		<div class="container-fluid vh-100 p-0">
			<div class="row d-flex justify-center align-self-center m-0 vh-100">
				<div class="col col-md-12 vh-100 p-0" id="homepage">
					<header>
						<h1 class="d-flex justify-content-center">PLAN A TRIP</h1>
					</header>
					<div class="description d-flex justify-content-center">Search for a City...</div>
					<div id="geocoder-container" class="d-flex justify-content-center mt-1 mb-5"></div>
					<div id="map" style="visibility: collapse"></div>
<!--					<img src="../assets/blonde-1867768_1920.jpg" alt="" class="home-img">-->
				</div>
			</div>
		</div>
	</div>
`;
}

export function BeginAllEvents() {
	Mapbox();
	checkBackgroundImage('home-img');
}

function addBackgroundImage(){
	$('#app').addClass('home-img')
}

export function checkBackgroundImage(pic){
	let background = $('#app');

	if(background.hasClass("home-img")){
		background.removeClass("home-img")
	}else if (background.hasClass('login-img')){
		background.removeClass("login-img")
	}else if(background.hasClass('register-img')){
		background.removeClass("register-img")
	}else if(background.hasClass('trip-img')){
		background.removeClass("trip-img")
	} else if(background.hasClass('triptrack-img')){
		background.removeClass("triptrack-img")
	} else if(background.hasClass('attraction-img')){
		background.removeClass("attraction-img")
	}

	//add the name of selector you want to add as background
	background.addClass(pic)

}



