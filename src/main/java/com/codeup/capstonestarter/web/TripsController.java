package com.codeup.capstonestarter.web;public class TripsController {
package com.codeup.capstonestarter.web;
import com.codeup.capstonestarter.data.trip.Trip;
import org.springframework.web.bind.annotation.*;

    @RestController
    @RequestMapping(value="/api/trips",headers = "Accept=applications/json")
    public class TripsController {
        @PutMapping("{id}")
        private void editTrips getPosts(@PathVariable Long id, @RequestBody Trip trip) {
            System.out.println(trip.getClass());
        }
        private void editTrips getPosts() {return  }


    }
