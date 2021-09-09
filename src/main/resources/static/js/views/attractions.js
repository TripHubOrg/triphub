import * as KEYS from "../keys.js"
import createView from "../createView.js";


var attractionsArray;
var apiKeyArray = [KEYS.openTripMapAPIKeyMoses(), KEYS.openTripMapAPIKeyNathan(), KEYS.openTripMapAPIKeyRaul(), KEYS.openTripMapAPIKeyWagner()];
var currentKeyIndex;

export function attractionsRequest(coordinates) {

    fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=16100&lon=${coordinates[0]}&lat=${coordinates[1]}&src_geom=wikidata&src_attr=wikidata&limit=10&apikey=${KEYS.openTripMapAPIKeyRaul()}`, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        response.json().then( data => {
           attractionsArray = filteredAttractions(data.features);
            createView("/attractions")
            console.log(attractionsArray)
            fetchEventDetails(attractionsArray)

        })
    })
}

function fetchEventDetails(attractionsList) {
    if (currentKeyIndex == null){
        currentKeyIndex = 0;
    }
    // var limitedAttractions = attractionList.slice(0, 8);
    attractionsList.forEach(attraction => {
        fetch(`https://api.opentripmap.com/0.1/en/places/xid/${attraction.properties.xid}?apikey=${apiKeyArray[currentKeyIndex]}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            response.json().then( data => {
                console.log(data);
                renderEventDetails()
            })
        })
        if (currentKeyIndex === 3){
            currentKeyIndex = 0
        }else {
            currentKeyIndex += 1;
        }
    })
}


function renderEventDetails(filteredAttraction) {

}





function filteredAttractions(attractionsPropertiesArray) {
    let filteredArray = [];
    let notIncluded = [];

    attractionsPropertiesArray.forEach(attraction => {
        if ( !(attraction.properties.name.length < 1) ){
            filteredArray.push(attraction);
        } else {
            notIncluded.push(attraction);
        }
    })
    // console.log(filteredArray);
    // console.log(notIncluded);
    return filteredArray;
}



    export default function AttractionsView(props){
        return   `<div class="container border shadow" id="attractionsPage">
                    <header>
                        <h1>Attractions</h1>
                    </header>
                    <main>
                        <div id="attractionsList"></div>
                        <div id="endOfList">End of list</div>
                    </main>
                </div>`
    }

    export function BeginAttractionsEvents(){
        renderAttractions(attractionsArray)
        filteredAttractions(attractionsArray)
    }

    function renderAttractions(listOfAttractions){
        console.log(listOfAttractions)
        $("#attractionsList").append(`
        ${listOfAttractions.map(attraction => `
        <div>
            <div>name: ${listOfAttractions.indexOf(attraction)} ${attraction.properties.name}</div>
        </div>
        `).join('')}
        `)
    }


// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //***** LOAD MORE ATTRACTIONS FUNCTIONALITY ******
// let attractionsContainer;
// let endOfListDiv;
//
//
// //Will need 2 new variables to setup IntersectionObserver -> "option" & "callback"
//
// let option = {
//     root: null, //This is the viewport, if set to null then it will use the entire document as like the screen to monitor our callback function later
//     rootMargin: '0px', // like in CSS, you can set a margin amount, basically reducing viewport size
//     threshold: 1.0 //Goes from 0 -> 1, this is how much of your 'target' (in this case the last div tag for attractions) needs to be seen in viewport to execute the callback function
// }
//
// //callback needs both of these parameters but we will only be using entry
// let callback = function(entries, observer){
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             //fetch request functions and other stuff would go here
//             //if we put a div at the very end of our page, once the DOM sees that last div when we scroll, it will execute any code in here
//         }
//     })
// }
//
// //Lastly, need to instantiate a new IntersectionObserver object, like in  Java
// let observer = new IntersectionObserver(callback, option)
// //and set target, meaning what the observer will observe for executing callback
// endOfListDiv = document.getElementById('some-div') //will replace this later
// observer.observe(endOfListDiv)
// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*****

