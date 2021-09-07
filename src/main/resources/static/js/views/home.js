import AddGeocoder from "../mapbox.js";


export default function Home(props) {
    homepage();
    AddGeocoder();

}

function homepage(){
    return `
    <div class="container border shadow">
        <header>
            <h1>Home Page</h1>
        </header>
        <main>
            <div id="geocoder-container" >
                <p>
                </p>    
            </div>
        </main>
    </div>`;
}


