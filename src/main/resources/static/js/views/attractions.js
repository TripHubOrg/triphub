import * as KEYS from "../keys.js"

export function attractionsRequest(coordinates) {
    console.log(coordinates)

    fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=16100&lon=${coordinates[0]}&lat=${coordinates[1]}&apikey=${KEYS.openTripMapAPIKey()}`, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        response.json().then( data => {
            console.log(data)
        })
    })


    // $.ajax({
    //     url: "https://opentripmap.io/openapi.en.json",
    //     type: "GET",
    //     data: {
    //         APPID: OPEN_TRIPMAP_KEY,
    //         lat: coordinates[1],
    //         lon: coordinates[0],
    //     },
    //     success: function (data) {
    //
    //         howItIsDisplayed(myLoopFunction(data))
    //     }
    // });
}

function myLoopFunction(features) {
    console.log(features)
    let obj = [];
    for (let i = 0; i < features.list.length; i++) {
        if (i % 5 === 0) {
            obj.push({
                country: features.city.country,
                //for name of attraction
                name: features.list[i].dt,
                //rating
                rate: features.list[i].dt_txt,
                // tags/categories
                tags: features.list[i].tags[0].description,
                //coordinates long
                long: features.coordinates[1],
                //oordinates lat
                lat: features.coordinates[0],
            })

        }

    }

    return obj
}

function displayForCards(data) {
    let events = $(`<div class="card"></div>`);

    events.append(
        `<div>

(jumbotron thumbnail)

from /xid

// <div class="date">${data.date}<img src=${otm} /><br></div>

(jumbotron thumbnail)

<hr>

<div class="name">name: ${data.name} F</div>

<hr>

<div class="description">${data.description}</div>

		<hr>
		
		<div class="rate">Rate: ${data.rate}</div>
		
			<hr>
			
			<div class="tags">Categories: ${data.tags}</div>
	</div>`
    )
    return events
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//***** LOAD MORE ATTRACTIONS FUNCTIONALITY ******
let attractionsContainer;
let endOfListDiv;


//Will need 2 new variables to setup IntersectionObserver -> "option" & "callback"

let option = {
    root: null, //This is the viewport, if set to null then it will use the entire document as like the screen to monitor our callback function later
    rootMargin: '0px', // like in CSS, you can set a margin amount, basically reducing viewport size
    threshold: 1.0 //Goes from 0 -> 1, this is how much of your 'target' (in this case the last div tag for attractions) needs to be seen in viewport to execute the callback function
}

//callback needs both of these parameters but we will only be using entry
let callback = function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            //fetch request functions and other stuff would go here
            //if we put a div at the very end of our page, once the DOM sees that last div when we scroll, it will execute any code in here
        }
    })
}

//Lastly, need to instantiate a new IntersectionObserver object, like in  Java
let observer = new IntersectionObserver(callback, option)
//and set target, meaning what the observer will observe for executing callback
endOfListDiv = document.getElementById('some-div') //will replace this later
observer.observe(endOfListDiv)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*****


function toggleBTN(){
    $("#toggleBTN").click(function () {
        window.location.href = "http://http://localhost:8080/mapbox";
    })
}
