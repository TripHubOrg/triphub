package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.activity.ActivityDetail;
import com.codeup.capstonestarter.data.activity.ActivityDetailRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/api/activitydetails",headers = "Accept=application/json")
public class ActivityDetailController {

    private final ActivityDetailRepository activityDetailRepository;

    public ActivityDetailController(ActivityDetailRepository activityDetailRepository) {
        this.activityDetailRepository = activityDetailRepository;
    }

    @PostMapping("/create")
    private void createAD(@RequestBody ActivityDetail newAD){
        activityDetailRepository.save(newAD);
    }

    @GetMapping("/getAD{id}")
    private ActivityDetail getADByID(@PathVariable Long id){
        return activityDetailRepository.getById(id);
    }

}
