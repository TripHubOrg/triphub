function attractionsRequest(coordinates) {
    $.ajax({
        url: "https://opentripmap.io/openapi.en.json",
        type: "GET",
        data: {
            APPID: OPEN_TRIPMAP_KEY,
            lat: coordinates[1],
            lon: coordinates[0],
        },
        success: function (data) {

            howItIsDisplayed(myLoopFunction(data))
        }
    });
}

function myLoopFunction(features) {
    console.log(features)
    let obj = [];
    for (let i = 0; i < features.list.length; i++) {
        if (i % 5 === 0) {
            obj.push({
                country: features.city.country,
                //for name of attraction
                name: features.list[i].dt,
                //rating
                rate: features.list[i].dt_txt,
                // tags/categories
                tags: features.list[i].tags[0].description,
                //coordinates long
                long: features.coordinates[1],
                //oordinates lat
                lat: features.coordinates[0],
            })

        }

    }

    return obj
}

function howItIsDisplayed(data) {
    data.forEach(function (obj) {
        //need to add id to html
        $('#smoothSailing').append(displayForCards(obj))
    })
}


function displayForCards(data) {
    let events = $(`<div class="card"></div>`);

    events.append(
        `<div>

(jumbotron thumbnail)

from /xid

// <div class="date">${data.date}<img src=${otm} /><br></div>

(jumbotron thumbnail)

<hr>

<div class="name">name: ${data.name} F</div>

<hr>

<div class="description">${data.description}</div>

		<hr>
		
		<div class="rate">Rate: ${data.rate}</div>
		
			<hr>
			
			<div class="tags">Categories: ${data.tags}</div>
	</div>`
    )
    return events
}


function scrolling(){
    $( "#smoothSailing" ).scroll(function() {
        $( ".class" ).append( ".class" );
    });

    // $( "span" ).css( "display", "inline" ).fadeOut( "slow" );

}

