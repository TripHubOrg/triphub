export default function userhomepage() {
	return `
<div class="container">

<div class="border shadow">
    <h1 class="text-center">My Page</h1>
    <hr>
</div>

<br>
    <!-- Start button -->
    <div class="container ">
        <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn rounded-pill text-white" type="button" style="background:#f35b3f"
                    onclick="window.location.href='http://localhost:8080/'">Plan A Trip
            </button>
        </div>
    <div>
            <!-- end button -->


            <br>
            <!-- Start horizontal Scrolling -->

            <div class="container">
                <div class="row justify-content-between">
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
             
`
}

export function routeToTripTrack() {
	$(".card").click(function () {
		window.location.href = 'http://localhost:8080/triptrack';
		return false;
	});
}