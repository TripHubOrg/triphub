package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.activity.Activity;
import com.codeup.capstonestarter.data.activity.ActivityRepository;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/api/activities", headers = "Accept=applications/json")
public class ActivityController {

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
}

