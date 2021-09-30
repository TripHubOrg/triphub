export function openTripMapAPIKeyRaul() {
	return "5ae2e3f221c38a28845f05b64b72b5500852f25750bcf6d74f919cc7"
}

export function openTripMapAPIKeyMoses() {
	return "5ae2e3f221c38a28845f05b65817c7a2eaf0fb48b1422f392a64f5a1"
}

export function openTripMapAPIKeyNathan() {
	return "5ae2e3f221c38a28845f05b6f6b9e76ad9363d2ee73715cbb7fef090"
}

export function openTripMapAPIKeyWagner() {
	return "5ae2e3f221c38a28845f05b60e8b29a4f011a183b093125960a633e0"
}

export function mapboxKey() {
	return "pk.eyJ1IjoicmNtYXJ0aW5lejI0NDEiLCJhIjoiY2t0YTlpMGowMTk1bDJ1bnVobmNvbG11biJ9.QxNyjtiIfIH6OyQI2Y5riQ"
}

export function pexelsKey() {
//must give credit (https://help.pexels.com/hc/en-us/articles/900005851903-How-should-I-give-credit-Can-I-use-your-logo-)
	return "563492ad6f91700001000001bf50572fc2fa4a76a19bd03cf10433f7"
}

// bash <(curl -sS https://raw.githubusercontent.com/gocodeup/dokku-deployment-guide/main/deploy.sh)
//
//     128.199.15.174

//Eventbrite API
// fetch("https://www.eventbriteapi.com/v3/users/me/?token=WBQYO4FPXJD7DJPK3OEZ", {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//     }
// })
//     .then(response=> {
//         response.json()
//             .then(data => {console.log(data)})
//     })


// Search for photos pexels
//https://api.pexels.com/v1/search?query=${category}tigers
// fetch("https://api.pexels.com/v1/search?query=tigers", {
//     method: "GET",
//     headers: {
//
//         Authorization: '563492ad6f91700001000001bf50572fc2fa4a76a19bd03cf10433f7'
//     }
//
// })
//     .then(response=> {
//         response.json()
//             .then(data => {console.log(data)})
//     })




// POST to CALENDER.LINK
// fetch("https://calndr.link/api/events", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         title: "Test",
//         start: "2020-04-25 01:05",
//         end: "2020-04-26 01:05",
//     })
// }).then(response=> {
//     response.json().then(data => {
//         console.log(data)
//     })
// })





// GET to CALENDER.LINK
// fetch("https://calndr.link/api/events/{eventId}", {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json"
//     },
// })
//     .then(response=> {
//         response.json()
//             .then(data => {console.log(data)})
//     })
//
// GET to OPEN_TRIPMAPAPI GEONAME
//
//  fetch("https://api.opentripmap.com/0.1/en/places/geoname?name=miami&apikey=5ae2e3f221c38a28845f05b60e8b29a4f011a183b093125960a633e0", {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json"
//     },
//      body: JSON.stringify({
//          lang: "en",
//          start: "miami",
//      })
// })





// GET to OPEN_TRIPMAPAPI xid
//     fetch("http://api.opentripmap.com/0.1/ru/places/xid", {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//             apikey: 5ae2e3f221c38a28845f05b61de3e1c96cc4be1e55e26b5e8166170a
//             radius: 1000
//             limit: 5
//             offset: 0
//             lon: -80.19366
//             lat: 25.77427
//             rate: 2
//             format: json
//         },
//
//     })