package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.activity.Activity;
import com.codeup.capstonestarter.data.activity.ActivityRepository;
import com.codeup.capstonestarter.data.trip.Trip;
import com.codeup.capstonestarter.data.trip.TripRepository;
import com.codeup.capstonestarter.data.user.User;
import com.codeup.capstonestarter.data.user.UserRepository;
import com.mysql.cj.conf.StringProperty;
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

//    @PostMapping
//    private void postActivities(@RequestBody Trip sameTrip) {
//       User owner = userRepository.getById(sameTrip.getOwner().getId());
//       sameTrip.setOwner(owner);
//activityRepository.save(sameTrip);
//    }

@GetMapping("/getactivities")
    private Activity getActivities(@PathVariable Long id){
return activityRepository.getById(id);
    }

}

