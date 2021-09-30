package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.activity.ActivityRepository;
import com.codeup.capstonestarter.data.location.Location;
import com.codeup.capstonestarter.data.location.LocationRepository;
import com.codeup.capstonestarter.data.trip.TripRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/location", headers = "Accept=applications/json")
public class LocationController {

    private final LocationRepository locationRepository;
    private final TripRepository tripRepository;
    private final ActivityRepository activityRepository;

    public LocationController(LocationRepository locationRepository, TripRepository tripRepository, ActivityRepository activityRepository) {
        this.locationRepository = locationRepository;
        this.tripRepository = tripRepository;
        this.activityRepository = activityRepository;
    }

    @PutMapping
    private void addLocation (@RequestBody Location location){
        locationRepository.save(location);
    }

    @GetMapping
    private Location getLocationByID(@RequestBody Location location){
        return locationRepository.getById(location.getId());
    }





}
