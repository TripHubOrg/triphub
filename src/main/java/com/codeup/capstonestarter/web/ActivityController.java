package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.activity.Activity;
import com.codeup.capstonestarter.data.activity.ActivityRepository;
<<<<<<< HEAD
=======
import com.codeup.capstonestarter.data.trip.Trip;
import com.codeup.capstonestarter.data.trip.TripRepository;
import com.codeup.capstonestarter.data.user.User;
import com.codeup.capstonestarter.data.user.UserRepository;
import com.mysql.cj.conf.StringProperty;
import com.codeup.capstonestarter.data.activity.ActivityDetailRepository;
import com.codeup.capstonestarter.data.activity.ActivityRepository;
import com.codeup.capstonestarter.data.trip.Trip;
import com.codeup.capstonestarter.data.trip.TripRepository;
>>>>>>> da98127c1e2823c0ee260b9072cd203c3500886b
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/api/activities", headers = "Accept=applications/json")
public class ActivityController {

<<<<<<< HEAD
    private ActivityRepository activityRepository;

    public ActivityController(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }
    //    @PutMapping("{id}")
//    private void editActivities(@PathVariable Long id, @RequestBody Activity activity) {
//        System.out.println(activity.getStarDate());
//        System.out.println(activity.getEndDate());
//        System.out.println(activity.getAddress());
//        System.out.println(activity.getLocation());
//    }

    @DeleteMapping("{id}")
    private void deleteTripTracks(@PathVariable Long id){
        activityRepository.deleteById(id);
    }
@PutMapping
    private void saveActivityRepository(@RequestBody Activity activity){
        activityRepository.save(activity);
}
=======
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

>>>>>>> da98127c1e2823c0ee260b9072cd203c3500886b
}

