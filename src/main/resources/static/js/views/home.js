import AddGeocoder from "../mapbox.js"

export default function Home(props) {
    console.log("The frontend did it. HER FAULT");
    return `
    <div class="container border shadow">
        <header>
            <h1>Home Page</h1>
        </header>
        <main>
            <div id="geocoder-container">
                <p>
                </p>    
            </div>
        </main>
    </div>`;
}

AddGeocoder();