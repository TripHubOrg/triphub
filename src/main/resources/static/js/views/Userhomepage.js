export default function userhomepage() {
    return `
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary rounded-pill" type="button" onclick="window.location.href='http://localhost:8080/'">Plan A Trip</button>
</div>
        
        <br>
        
        <div class="container">
  <div class="row">
    <div class="col">
      Your Trips
    </div>
    <a href="http://www.google.com" class="col"><div>See all Trips</div></a>

<div id="tripsPreview" class="row">
        <div class="row" id="topdown">
        

       <div id="insideOut" class="card">
            <img class="pictureControl" src="https://picsum.photos/300/200">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
    additional content. This content is a little bit longer.</p>
        </div>
    <div id="insideOut" class="card">
            <img class="pictureControl" src="https://picsum.photos/300/200">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
    additional content. This content is a little bit longer.</p>
        </div>
        <div id="insideOut" class="card">
            <img class="pictureControl" src="https://picsum.photos/300/200">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
    additional content. This content is a little bit longer.</p>
        </div>
        <div id="insideOut" class="card">
            <img class="pictureControl" src="https://picsum.photos/300/200">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
    additional content. This content is a little bit longer.</p>
        </div>
    
    </div>
    </div>




`

}


let fakeAttractions =
    {
        tripLocation: 'Trip 1',
        tripStart: '2021-09-12',
        tripEnd: '2021-10-02',
        spots: [
            {
                name: 'Spot1',
                id: 1,
                starDate: '2021-09-13',
                endDate: '2021-09-13',
                image: '/Assets/GettyImages-621924830-scaled.jpg',
                address: '123 Quis nostrud exercitation ullamco, ',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Lectus urna duis convallis convallis tellus id interdum velit.'
            },
            {
                name: 'Spot2',
                id: 2,
                starDate: '2021-09-14',
                endDate: '2021-09-14',
                image: 'Assets/GettyImages-621924830-scaled.jpg',
                address: '456 Duis aute irure dolor in reprehenderit',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero nunc consequat interdum varius sit amet mattis. Turpis cursus in hac habitasse platea dictumst quisque sagittis.'
            },
            {
                name: 'Spot3',
                id: 3,
                starDate: '2021-09-15',
                endDate: '2021-09-15',
                image: 'Assets/GettyImages-621924830-scaled.jpg',
                address: '789 Commodo sed egestas egestas fringilla',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at elementum eu facilisis. Morbi tristique senectus et netus et malesuada fames ac.'
            },
            {
                name: 'Spot4',
                id: 4,
                starDate: '2021-09-16',
                endDate: '2021-09-16',
                image: 'Assets/GettyImages-621924830-scaled.jpg',
                address: 'Pellentesque eu tincidunt tortor',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Neque volutpat ac tincidunt vitae semper quis lectus nulla.'
            }
        ]
    }


// <div id="tripsPreview">
//     <div className="row">
//         <div className="col-sm-6">
//             <div className="card">
//                 <div className="card-body">
//                     <h5 className="card-title">${fakeAttractions.tripLocation}</h5>
//                     <img className="card-title d-block" src="${fakeAttractions.spots.map( doggy => doggy.image)}"
//                          alt="Picture">
//                         <a href="#" className="btn btn-primary">To triptrack</a>
//                 </div>
//             </div>
//         </div>
//         <div className="col-sm-6">
//             <div className="card">
//                 <div className="card-body">
//                     <h5 className="card-title">${fakeAttractions.tripLocation}</h5>
//                     <img className="card-title d-block" src="${fakeAttractions.spots.map( doggy => doggy.image)}"
//                          alt="Picture">
//                         <a href="#" className="btn btn-primary">To triptrack</a>
//                 </div>
//             </div>
//         </div>
//     </div>