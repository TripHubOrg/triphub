package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.activity.Activity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/api/activities", headers = "Accept=applications/json")
public class ActivityController {

//    @PutMapping("{id}")
//    private void editActivities(@PathVariable Long id, @RequestBody Activity activity) {
//        System.out.println(activity.getStarDate());
//        System.out.println(activity.getEndDate());
//        System.out.println(activity.getAddress());
//        System.out.println(activity.getLocation());
//    }

}

