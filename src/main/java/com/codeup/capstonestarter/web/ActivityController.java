package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.trip.Trip;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/activities", headers = "Accept=applications/json")
public class ActivityController {


    @PutMapping("{id}")
    private void editTrips(@PathVariable Long id, @RequestBody Trip trip) {
        System.out.println(trip.getStarDate());
    }

    @PutMapping("{/{id}}")
    private void updateTrips(@PathVariable Long id, @RequestBody Trip whateveriwant) {
        System.out.println(whateveriwant.getUsers());
    }


}

