package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.activity.Activity;
import com.codeup.capstonestarter.data.activity.ActivityRepository;
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
    private final ActivityRepository activityRepository;

    public TripsController(TripRepository tripRepository, UserRepository userRepository, LocationRepository locationRepository, ActivityRepository activityRepository) {
        this.tripRepository = tripRepository;
        this.userRepository = userRepository;
        this.locationRepository = locationRepository;
        this.activityRepository = activityRepository;
    }

    @PostMapping
    private Trip createTrip(@RequestBody Trip newTrip, OAuth2Authentication auth) {
        User owner = userRepository.findByEmail(auth.getName()).get();
        newTrip.setOwner(owner);
        tripRepository.save(newTrip);
        return newTrip;
    }

    @PostMapping("/makingTrip")
    private void createTrip(@RequestBody Trip newTrip) {
        User owner = userRepository.getById(newTrip.getOwner().getId());
        newTrip.setOwner(owner);
        tripRepository.save(newTrip);
    }

    @PutMapping("/addActivties")
    private void addActivties(@RequestBody Trip trip){
        tripRepository.save(setActivities(trip));
    }

    @PutMapping("/addTripCollaborators")
    private void addCollaborators(@RequestBody Trip trip){
        tripRepository.save(setCollaborators(trip));
    }

    @PutMapping("/addLocation")
    private void addLocationToTrip(@RequestBody Trip trip){
        locationRepository.getById(trip.getLocation().getId());
    }

    @GetMapping("{id}")
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

    @PutMapping("/addActivity")
    private Trip setActivities(Trip trip){
        Trip existingTrip = tripRepository.getById(trip.getId());

        Collection<Activity> activities = new ArrayList<>();
        Collection<Activity> potentialActivities = trip.getActivities();
        for(Activity activity : potentialActivities){
            System.out.println(activity.getActivityDetail());
            activities.add(activity);
        }
        existingTrip.setActivities(activities);

        return existingTrip;
    }

    @PutMapping("/editTrip{id}")
        private void editTrips (@PathVariable Long id,@RequestBody Trip trip) {
        Trip editTrip = tripRepository.getById(id);

        editTrip.setstartDate(trip.getstartDate());
        editTrip.setEndDate((trip.getEndDate()));

        tripRepository.save(editTrip);


        }


}
