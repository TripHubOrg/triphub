import {addUserGeocoder} from "../mapbox.js";
import {getHeaders} from "../auth.js";
import render from "../render.js";
import router from "../router.js";
import {checkBackgroundImage} from "./Home.js";

export default function userhomepage(props) {
	console.log(props)
	return `
<div class="container">

    <div class="border shadow">
        <h1 class="text-center">My Page</h1>
        <hr>
    </div>
    <br>
    <!-- Start button -->
    <div class="row">
        <div class="d-grid gap-2 col-6 mx-auto p-2">
            <button class="btn rounded-pill text-white" type="button" style="background:#f35b3f"  data-bs-toggle="collapse" data-bs-target="#newTrip">
            Create a New Trip
            </button>
        </div>
    </div>
    <div class="collapse row justify-content-center" id="newTrip">
        <div class="col-12 pt-2">
            <div class="row justify-content-center ">
                <div  class="col-2 ml-2">
                    <label for="fromDate">From</label>
                    <input class="dateInputs" id="fromDate" type="date" name="fromDate" data-value="2021-12-31"> 
                </div>
                <div class="col-2">
                    <label for="toDate">To</label>
                    <input id="toDate" type="date" name="toDate" data-value="2021-12-31">
                </div>
            </div>
        </div>
        <div class="col-12 d-flex mx-auto pt-2">
            <div class="row justify-content-center d-flex mx-auto">
                <div id="geocoder-container" class=""></div>
            </div>
        </div>
        <div class="col-12 d-flex justify-content-center mx-auto pt-2">
            <buttton id="submitNewTrip" class="btn rounded-pill" style="background:#f35b3f" type="button">Begin Your Adventure</buttton>
        </div>
    </div>
        <!-- end button -->
        <br>
        <!-- Start horizontal Scrolling -->
            <div class="row justify-content-center">
        <!-- End horizontal Scrolling -->
        <!--  Start Pictures in horizontal Scrolling -->
                <div id="tripsPreview" class="row">
                    <div class="row" id="topdown">
                    ${props.user.owned_trips.map(function (trip) {
						return `<div data-id=${trip.id} class="card insideOut">
                                <div class="text-center text-white" style="background:#f35b3f" >${trip.location.name}</div>
                            <img class="pictureControl" src="https://picsum.photos/300/200">
                        </div>`
	})}
                    </div>
                </div>
                            <!-- End Pictures in Horizontal Scrolling -->

                <!-- end main container div -->
</div>
</div>    
`
}

let geocoderData;
let start;
let end;

export function routeToTripTrack() {

	checkBackgroundImage('trip-img');

	start = $('#fromDate').pickadate({
		formatSubmit: 'yyyy-mm-dd'
	});
	end = $('#toDate').pickadate({
		formatSubmit: 'yyyy-mm-dd'
	});

	addUserGeocoder()

	$(".card").click(function () {
		getTripTrackView( $(this).attr('data-id') );
	});
	newTripEvent();
}

function newTripEvent(dates) {
	$('#submitNewTrip').click(function () {
		console.log(geocoderData)
		let body = {
			country: `${geocoderData.result.context[2].text}`,
			endDate: `${$('[name="toDate_submit"]').val()}`,
			location: {
				name: `${geocoderData.result.place_name}`,
				lon: `${parseFloat(geocoderData.result.geometry.coordinates[0])}`,
				lat: `${parseFloat(geocoderData.result.geometry.coordinates[1])}`
			},
			startDate: `${$('[name="fromDate_submit"]').val()}`
		}
		console.log(body);
		let request = {
			method: "POST",
			headers: getHeaders(),
			body: JSON.stringify(body)
		};

		fetch("/api/trips", request).then((response) => {
			console.log(response.status);
			return response.json();
		}).then(data => {
			let route = router('/triptrack');

			render(data, route)
		});

	})
}


function getTripTrackView(id) {
	let route = router('/triptrack');
	fetch(`/api/trips/${id}`).then(res => {
		return res.json();
	}).then(data => {
		render(data, route)
	})
}

export function geocoderResults(gData) {
	geocoderData = gData;
	return geocoderData;
}