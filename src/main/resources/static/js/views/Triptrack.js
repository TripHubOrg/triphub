let fakeAttractions = fakeData()

export function fakeData(){
	return {
		tripLocation: 'Trip 1',
		tripStart: '2021-09-12',
		tripEnd: '2021-10-02',
		spots: [
			{
				name: 'Spot1',
				id: 1,
				starDate: '2021-09-13',
				endDate: '2021-09-13',
				image: '/assets/corgi-laptop.jpeg',
				address: '123 Quis nostrud exercitation ullamco, ',
				details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Lectus urna duis convallis convallis tellus id interdum velit.'
			},
			{
				name: 'Spot2',
				id: 2,
				starDate: '2021-09-14',
				endDate: '2021-09-14',
				image: '/assets/corgi-laptop.jpeg',
				address: '456 Duis aute irure dolor in reprehenderit',
				details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero nunc consequat interdum varius sit amet mattis. Turpis cursus in hac habitasse platea dictumst quisque sagittis.'
			},
			{
				name: 'Spot3',
				id: 3,
				starDate: '2021-09-15',
				endDate: '2021-09-15',
				image: '/assets/corgi-laptop.jpeg',
				address: '789 Commodo sed egestas egestas fringilla',
				details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at elementum eu facilisis. Morbi tristique senectus et netus et malesuada fames ac.'
			},
			{
				name: 'Spot4',
				id: 4,
				starDate: '2021-09-16',
				endDate: '2021-09-16',
				image: '/assets/corgi-laptop.jpeg',
				address: 'Pellentesque eu tincidunt tortor',
				details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Neque volutpat ac tincidunt vitae semper quis lectus nulla.'
			}
		]
	}
}
// noinspection SpellCheckingInspection
export default function Triptrack(props) {
	return `
		<div class="tripTrackContainer container">
            <header class="locationFromTo text-center row">
                <h3 class="col-12">Trip To</h3>
                <h1 class="col-12">${fakeAttractions.tripLocation}</h1>
                <div class="col-12">
                	<div class="row justify-content-center ">
                        	<label for="fromDate">From</label>
                        	<input class="dateInputs" id="fromDate" name="fromDate"> 
                    	<div class="col-3 m-0 p-0">
                        	<label for="toDate">To</label>
                        	<input id="toDate" type="date" value="${fakeAttractions.tripEnd}">
                    	</div>
					</div>
                    
                </div>
            </header>
            <section class="TriptrackAtractionsList my-2">
				${fakeAttractions.spots.map( spot => 
					`<div class="row p-0 my-3" id="${spot.id}">
						<div class="col-12 date p-0">
							<input id="EventId" type="date" value="${spot.starDate}" width="10px">
						</div>
						<div class="col-12 p-0 attraction card">
							<div id="cardForAttraction" class="card bg-transparent m-0 p-0" style="height: 250px" data-bs-toggle="collapse" data-bs-target="#thisSpot${spot.id}">
								<img class="card-img img-responsive collapsed d-block" src="${spot.image}" alt="event-img" style="object-fit: cover; height:100%; width: 100%; text-shadow: 2px 2px grey">
								<div class="card-img-overlay text-white d-flex align-items-center justify-content-center">
									<div class="title notHidden" style="background-color:rgba(255,127,80,0.65)">
										<h1 class="text-center">
											${spot.name}
										</h1>
								</div>
							</div>
						</div>
					</div>
				<div class="col-12 collapse" id="thisSpot${spot.id}">
							<div class="card-body text-red">
								<div class="card-title text-black">${spot.name}</div>
								<div class="card-text text-red">
									<p>${spot.address}</p>
									<p>${spot.details}</p>
								</div>
							</div>
						</div>
				<div class="col-12 py-1">
					<div class="row justify-content-between">
						<button class="col-2 btn btn-info" type="submit">Add To Calendar</button>
						<div class="col-2 text-end p-0">
							<button class="btn btn-info" type="submit">Edit</button>
							<button class="btn btn-info" type="submit">Save</button>
						</div>
					</div>
				</div>
            </div>
					`
				).join('')}
            </section>
        </div>
	`;
}

export function TripTrackOnLoad(){
	console.log('IS THIS WORKING')
	$(document).ready(function (){
		$('.dateInputs').attr('type', 'date')
	})
}

function renderAttractionList(attractions) {
	attractions.forEach(attraction => {
		$('.tripTrackContainer').append(
			`<div class="row border p-0 attraction1">
				<div class="col-12 date p-0">
					<input id="EventId" type="date" value="2021-09-12" width="10px">
				</div>
				<div class="col-12 p-0 attraction card">
					<div id="cardForAttraction" class="card bg-transparent m-0 p-0" style="height: 250px" data-bs-toggle="collapse" data-bs-target="#thisEvent">
						<img class="card-img img-responsive collapsed d-block" src="#" alt="event-img" style="object-fit: cover; height:100%; width: 100%; text-shadow: 2px 2px grey">
						<div class="card-img-overlay text-white d-flex align-items-center justify-content-center">
							<div class="title notHidden" style="background-color:rgba(255,127,80,0.65)">
								<h1 class="text-center">
									attraction.name
								</h1>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 collapse border" id="thisEvent">
							<div class="card-body text-red">
								<div class="card-title text-black">attraction.name</div>
								<div class="card-text text-red">
									<p>Address</p>
									<p>Attraction Details</p>
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
			`
		)
	})
}