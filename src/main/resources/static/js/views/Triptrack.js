// noinspection SpellCheckingInspection
export default function Triptrack(props){
	return `
		<div class="tripTrackContainer container-fluid">
            <header class="locationFromTo text-center">
                <h1>Trip To</h1>
                <h2>{Insert Location Here}</h2>
                <div class="row justify-content-center">
                    <span class="col-3 m-0 p-0">
                        <label for="fromDate">From</label>
                        <input id="fromDate" type="date" value="2021-09-12">
                    </span>
                    <span class="col-3 m-0 p-0">
                        <label for="toDate">To</label>
                        <input id="toDate" type="date" value="2021-09-12" width="10px">
                    </span>
                </div>
            </header>
            <section class="TriptrackAtractionsList my-2">
                <div class="row border p-1 attraction1">
                    <div class="col-12 date">
                        <input id="EventId" type="date" value="2021-09-12" width="10px">
                    </div>
                    <div class="col-12 attraction card">
                        <div id="cardForAttraction" class="card bg-transparent my-3 p-2" style="height: 250px" data-bs-toggle="collapse" data-bs-target="#thisEvent">
                            <img class="card-img img-responsive collapsed d-block" src="#" alt="event-img" style="object-fit: cover; height:100%; width: 100%; text-shadow: 2px 2px grey">
                            <div class="card-img-overlay text-white d-flex align-items-center justify-content-center">
                                <div class="title notHidden" style="background-color:rgba(255,127,80,0.65)">
                                    <h1 class="text-center">
                                        attraction.name
                                    </h1>
                                </div>
                            </div>
                            <div class="collapse border" id="thisEvent">
                                <div class="card-body text-red">
                                    <div class="card-title text-black">attraction.name</div>
                                    <div class="card-text text-red">
                                        <p>Address</p>
                                        <p>Attraction Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row justify-content-between border">
                            <button class="col-2" type="submit">Add To Calendar</button>
                            <div class="col-2 border text-center">
                                <button type="submit">Edit</button>
                                <button type="submit">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
	`;
}