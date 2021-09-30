package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.activity.Activity;
import com.codeup.capstonestarter.data.activity.ActivityRepository;
import com.codeup.capstonestarter.data.trip.Trip;
import com.codeup.capstonestarter.data.trip.TripRepository;
import com.codeup.capstonestarter.data.user.UserRepository;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/api/activities", headers = "Accept=applications/json")
public class ActivityController {

    private final ActivityRepository activityRepository;
    private final TripRepository tripRepository;
    private final UserRepository userRepository;

    public ActivityController(ActivityRepository activityRepository, TripRepository tripRepository,UserRepository userRepository) {
        this.activityRepository = activityRepository;
        this.tripRepository = tripRepository;
        this.userRepository = userRepository;
    }
    
    @PostMapping
    private void addActivityToTrip(@RequestBody Activity activity){
        Trip trip = tripRepository.getById(activity.getTrip().getId());
        activity.setTrip(trip);
        activityRepository.save(activity);
    }
  
    @PutMapping("{id}")
    private void editActivities(@PathVariable Long id, @RequestBody Activity activity) {
        System.out.println(activity.getStarDate());
        System.out.println(activity.getEndDate());
        System.out.println(activity.getAddress());
    }


@GetMapping("/getactivities")
    private Activity getActivities(@PathVariable Long id){
return activityRepository.getById(id);
    }

}

