package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.location.LocationRepository;
import com.codeup.capstonestarter.data.trip.Trip;
import com.codeup.capstonestarter.data.trip.TripRepository;
import com.codeup.capstonestarter.data.user.User;
import com.codeup.capstonestarter.data.user.UserRepository;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

@RestController
@RequestMapping(value = "/api/trips", headers = "Accept=application/json")
public class TripsController {

    private final TripRepository tripRepository;
    private final UserRepository userRepository;
    private final LocationRepository locationRepository;

    public TripsController(TripRepository tripRepository, UserRepository userRepository, LocationRepository locationRepository) {
        this.tripRepository = tripRepository;
        this.userRepository = userRepository;
        this.locationRepository = locationRepository;
    }

    @PostMapping
    private void createTrip(@RequestBody Trip newTrip) {
//        User owner = userRepository.findByEmail(auth.getName()).get();
//        newTrip.setOwner(owner);
        System.out.println(newTrip.getStarDate());
        System.out.println(newTrip.getEndDate());
//        tripRepository.save(newTrip);
    }

    @PutMapping("/addTripCollaborators")
    private void addCollaborators(@RequestBody Trip trip){
        tripRepository.save(setCollaborators(trip));
    }

    @PutMapping("/addLocation")
    private void addLocationToTrip(@RequestBody Trip trip){
        locationRepository.getById(trip.getLocation().getId());
    }

    @GetMapping("/getTrip{id}")
    private Trip getTripByID(@PathVariable Long id){
        return tripRepository.getById(id);
    }

    @GetMapping ("/getTripCollaborators{id}")
    private Collection<User> getTripCollaborators(@PathVariable Long id){
        Trip existingTrip = tripRepository.getById(id);
        return existingTrip.getCollaborators();
    }

    private Trip setCollaborators(Trip trip){
        Trip existingTrip = tripRepository.getById(trip.getId());

        Collection<User> collaborators = new ArrayList<>();
        Collection<User> potentialCollaborators = trip.getCollaborators();
        for(User collaboratorId : potentialCollaborators){
            User collaborator = userRepository.getById(collaboratorId.getId());
            System.out.println(collaborator.getUsername());
            collaborators.add(collaborator);
        }
        existingTrip.setCollaborators(collaborators);
        return existingTrip;
    }

//    @PutMapping("{id}")
//        private void editTrips (@PathVariable Long id, @RequestBody Trip trip) {
//            System.out.println(trip.getStarDate());
//        }


}
