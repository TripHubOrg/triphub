import {addUserGeocoder} from "../mapbox.js";

export default function userhomepage() {
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
                    <input class="dateInputs" id="fromDate" name="fromDate" data-value=""> 
                </div>
                <div class="col-2">
                    <label for="toDate">To</label>
                    <input id="toDate" type="date" data-value="">
                </div>
            </div>
        </div>
        <div class="col-12 d-flex mx-auto pt-2">
            <div class="row justify-content-center d-flex mx-auto">
                <div id="geocoder-container" class=""></div>
            </div>
        </div>
        <div class="col-12 d-flex justify-content-center mx-auto pt-2">
            <buttton class="btn rounded-pill" style="background:#f35b3f" type="button">Begin Your Adventure</buttton>
        </div>
    </div>
            <!-- end button -->


            <br>
            <!-- Start horizontal Scrolling -->

            
                <div class="row justify-content-center">
                    <div class="col-4">
                        Your Trips
                    </div>
                    <div class="col-4 text-primary"
                         style="text-decoration: underline; cursor: pointer;z-index:9999"
                         onclick="window.location.href='http://localhost:8080/triptrack'">
                        See all Trips
                    </div>
            <!-- End horizontal Scrolling -->

            <!--  Start Pictures in horizontal Scrolling -->

                    <div id="tripsPreview" class="row">
                    
                        <div class="row" id="topdown">

                            <div id="insideOut" class="card">
                                    <div class="text-center text-white" style="background:#f35b3f">Trip 1</div>
                                <img class="pictureControl" src="https://picsum.photos/300/200">
                            </div>
                            <div id="insideOut" class="card">
                                    <div class="text-center text-white" style="background:#f35b3f">Trip 2</div>
                                <img class="pictureControl" src="https://picsum.photos/300/200">
                            </div>
                            <div id="insideOut" class="card">
                                     <div class="text-center text-white" style="background:#f35b3f">Trip 3</div>
                                <img class="pictureControl" src="https://picsum.photos/300/200">
                            </div>
                            <div id="insideOut" class="card">
                                     <div class="text-center text-white" style="background:#f35b3f">Trip 4</div>
                                <img class="pictureControl" src="https://picsum.photos/300/200">
                            </div>
                        </div>
                    </div>
                                <!-- End Pictures in Horizontal Scrolling -->

                    <!-- end main container div -->
</div>
</div>    
`
}

export function routeToTripTrack() {
    addUserGeocoder()
    $(".card").click(function () {
        window.location.href = 'http://localhost:8080/triptrack';
        return false;
    });
}