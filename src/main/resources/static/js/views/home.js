// import Mapbox from "../mapbox.js";


export default function Home(props) {
	return `
    <div class="container border shadow" id="homepage">
        <header>
            <h1>Home Page</h1>
        </header>
        <main>
        	<div id="geocoder-container"></div>
   			<div id="map" style="height: 500px; width: 500px"></div>
        </main>
    </div>`;
}

// function homepage(){
//     return `
//     <div class="container border shadow">
//         <header>
//             <h1>Home Page</h1>
//         </header>
//         <main>
//             <div id="geocoder-container">
//             <div id="map" style="height: 100px; width: 100px"></div>
//             </div>
//         </main>
//     </div>`;
// }

export function BeginAllEvents() {
	// $('#homepage').load(function () {
	// 	Mapbox();
	// })
}

