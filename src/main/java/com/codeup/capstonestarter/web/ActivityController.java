package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.activity.Activity;
import com.codeup.capstonestarter.data.activity.ActivityDetailRepository;
import com.codeup.capstonestarter.data.activity.ActivityRepository;
import com.codeup.capstonestarter.data.trip.Trip;
import com.codeup.capstonestarter.data.trip.TripRepository;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/api/activities", headers = "Accept=applications/json")
public class ActivityController {

    private final TripRepository tripRepository;
    private final ActivityRepository activityRepository;
    private final ActivityDetailRepository activityDetailRepository;

    public ActivityController(TripRepository tripRepository, ActivityRepository activityRepository, ActivityDetailRepository activityDetailRepository) {
        this.tripRepository = tripRepository;
        this.activityRepository = activityRepository;
        this.activityDetailRepository = activityDetailRepository;
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
        System.out.println(activity.getLocation());
    }



}

