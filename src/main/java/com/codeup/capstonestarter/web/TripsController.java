package com.codeup.capstonestarter.web;
import com.codeup.capstonestarter.data.trip.Trip;
import com.codeup.capstonestarter.data.trip.TripRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/api/trips",headers = "Accept=applications/json")
public class TripsController {

    private TripRepository tripRepository;

    public TripsController(TripRepository tripRepository) {
        this.tripRepository = tripRepository;
    }

    @PostMapping
    private void createTrips(@RequestBody Trip newTrips) {

//        System.out.println(newTrips.getUsers());
        System.out.println(newTrips.getStarDate());
        System.out.println(newTrips.getEndDate());
        System.out.println(newTrips.getLocation_id());
        System.out.println(newTrips.getTimezone());
        System.out.println(newTrips.getStarDate());
//        System.out.println(newTrips.getUsers());

//        tripRepository.
//        emailService.prepareAndSend(newTrips, "test", "the is new post");
    }

    @PutMapping("{id}")
        private void editTrips (@PathVariable Long id, @RequestBody Trip trip) {
            System.out.println(trip.getStarDate());
        }



    }
