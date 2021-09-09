import * as KEYS from "../keys.js"
import createView from "../createView.js";


var attractionsArray;

export function attractionsRequest(coordinates) {
    console.log(coordinates)

    fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=16100&lon=${coordinates[0]}&lat=${coordinates[1]}&apikey=${KEYS.openTripMapAPIKey()}`, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        response.json().then( data => {
            console.log(data.features)
           attractionsArray = data.features;
            createView("/attractions")

        })
    })
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
    }

    function renderAttractions(listOfAttractions){
        console.log(listOfAttractions)
        $("#attractionsList").append(`
        ${listOfAttractions.map(attraction => `
        <div>
            <div>${attraction.properties.name}</div>
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

