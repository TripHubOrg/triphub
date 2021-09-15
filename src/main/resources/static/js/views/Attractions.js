import * as KEYS from "../keys.js"
import createView from "../createView.js";
import Mapbox from "../mapbox.js";


var attractionsArray = [];
var apiKeyArray = [KEYS.openTripMapAPIKeyMoses(), KEYS.openTripMapAPIKeyNathan(), KEYS.openTripMapAPIKeyRaul(), KEYS.openTripMapAPIKeyWagner()];
var currentKeyIndex;
let limit = 100;
let offset = 0;
let sliceStart = 0;
let sliceEnd = 7;

let renderedAttractionInfoList = [];

//****************Variables for Infinite Scrolling*************
let scrollTarget;
let option = {
	root: null, //This is the viewport, if set to null then it will use the entire document as like the screen to monitor our callback function later
	rootMargin: '0px', // like in CSS, you can set a margin amount, basically reducing viewport size
	threshold: 1.0 //Goes from 0 -> 1, this is how much of your 'target' (in this case the last div tag for attractions) needs to be seen in viewport to execute the callback function
}

//callback needs both of these parameters but we will only be using entry
let callback = function (entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			//fetch request functions and other stuff would go here
			//if we put a div at the very end of our page, once the DOM sees that last div when we scroll, it will execute any code in here
			fetchEventDetails(attractionsArray)
			addAttractionClickEvents()
		}
	})
}
//Lastly, need to instantiate a new IntersectionObserver object, like in  Java
let observer = new IntersectionObserver(callback, option)


//============== INITIAL VIEW BEFORE EVENTS LOAD =====================================================
export default function AttractionsView(props) {
	return `<div class="container border shadow" id="attractionsPage">
                    <div id="geocoder-container" class="d-flex justify-content-center my-5"></div>
   			        <div id="map" style=" visibility: collapse"></div>
                    <header>
                        <h1 class="attractionsTitle">Attractions</h1>
                        <hr>
                    </header>
                    <main>
                        <div id="attractionsList" class="row row-cols-sm-1 row-cols-lg-2"></div>
                        <div id="endOfList">End of list</div>
                    </main>
                </div>`
}

//===================================================================================
export function attractionsRequest(coordinates) {
	//&src_geom=wikidata&src_attr=wikidata
	fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=16100&lon=${coordinates[0]}&lat=${coordinates[1]}&src_geom=wikidata&src_attr=wikidata&limit=${limit}&offset=${offset}&apikey=${KEYS.openTripMapAPIKeyMoses()}`, {
		headers: {
			"Content-Type": "application/json"
		}
	}).then(response => {
		response.json().then(data => {
			console.log('FROM ATTRACTIONSREQUEST')
			console.log(data)
			//returns an array of all attractions from response
			attractionsArray = filteredAttractions(data.features);

			//creates view for attractions after response is provided
			createView("/attractions")

			//Will begin to fetch details for first 10 attractions
			fetchEventDetails(attractionsArray)
		})
	})
}

function fetchEventDetails(attractionsList) {
	if (currentKeyIndex == null) {
		currentKeyIndex = 0;
	}
	let limitedAttractions = attractionsList.slice(sliceStart, sliceEnd);
	limitedAttractions.forEach(attraction => {
		fetch(`https://api.opentripmap.com/0.1/en/places/xid/${attraction.properties.xid}?apikey=${apiKeyArray[currentKeyIndex]}`, {
			headers: {
				"Content-Type": "application/json"
			}
		}).then(response => {
			response.json().then(data => {
				console.log(data);
				renderAttraction(data)
			})
		})
		if (currentKeyIndex === 3) {
			currentKeyIndex = 0
		} else {
			currentKeyIndex += 1;
		}
	})

	sliceStart = sliceEnd + 1;
	sliceEnd += 7;

	addAttractionClickEvents()
}

function renderEventDetails(filteredAttraction) {

}

function filteredAttractions(attractionsPropertiesArray) {
	let filteredArray = [];
	let notIncluded = [];

	attractionsPropertiesArray.forEach(attraction => {
		if (!(attraction.properties.name.length < 1)) {
			filteredArray.push(attraction);
		} else {
			notIncluded.push(attraction);
		}
	})
	// console.log(filteredArray);
	// console.log(notIncluded);
	return filteredArray;
}

export function BeginAttractionsEvents() {
    Mapbox();
	// renderAttractions(attractionsArray)
	filteredAttractions(attractionsArray)
	//and set target, meaning what the observer will observe for executing callback
	scrollTarget = document.getElementById('endOfList')
	observer.observe(scrollTarget)
}

function renderAttraction(attraction) {
	$("#attractionsList").append(`
		<div class="col">
			<div id="card${attraction.xid}" class="card bg-transparent text-white my-3 p-2 border-0" style="min-height:275px" data-bs-toggle="collapse" data-bs-target="#${attraction.xid}">
				<img class="card-img img-responsive border collapsed d-block" src="${checkForImage(attraction)}" alt="event-img" style="object-fit: cover; overflow:hidden; max-height:70%; width: 100% text-shadow: 2px 2px grey">
				<div class="card-img-overlay d-flex align-items-center justify-content-center">
					<div class="title notHidden" style="background-color:rgba(255,127,80,0.65)">
						<h1 class="text-center">
							${attraction.name}
						</h1>
					</div>	
				</div>
            	
            	<div class="collapse" id="${attraction.xid}">
            		<div class="card card-body">
            			<div class="card-title text-black">${attraction.name}</div>
            			<div class="card-text text-black">
            				<p>${attraction.address.house_number} ${attraction.address.road}, ${attraction.address.city}, ${attraction.address.state}, ${attraction.address.postcode} </p>
            				<p>${checkForDetails(attraction)}</p>
						</div>
					</div>
				</div>
        	</div>
		</div>
        `)
	// renderedAttractionInfoList.push(attraction)
	$(`#card${attraction.xid}`).on("click", addAttractionClickEvents)

}

//Click Events for Attractions
function addAttractionClickEvents() {
	let parent = $(this).children('.card-img-overlay')
	let child = parent.children()[0]

	if ($(child).hasClass('notHidden')){
		$(child).prop('hidden', 'true')
		$(child).removeClass('notHidden')
	} else {
		$(child).addClass('notHidden')
		$(child).removeAttr('hidden')
	}
}

//check if attraction has an image
function checkForImage(attraction) {
	if (attraction.hasOwnProperty('preview')) {
		return attraction.preview.source
	} else {
		return '#'
	}
}

function checkForDetails(attraction){
	if (attraction.hasOwnProperty('wikipedia_extracts')){
		return attraction.wikipedia_extracts.text
	} else {
		return ''
	}
}


