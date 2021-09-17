package com.codeup.capstonestarter.data.activity;

import com.codeup.capstonestarter.data.address.Address;
import com.codeup.capstonestarter.data.location.Location;
import com.codeup.capstonestarter.data.trip.Trip;

public class Activity {
    private Long id;
    private Trip trip;
    private Location location;
    private Address address;
    private ActivityDetail details;
    private String starDate;
    private String endDate;

    public Activity() {
    }

    public Activity(Long id, Trip trip, Location location, Address address, ActivityDetail details, String starDate, String endDate) {
        this.id = id;
        this.trip = trip;
        this.location = location;
        this.address = address;
        this.details = details;
        this.starDate = starDate;
        this.endDate = endDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Trip getTrip() {
        return trip;
    }

    public void setTrip(Trip trip) {
        this.trip = trip;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public ActivityDetail getDetails() {
        return details;
    }

    public void setDetails(ActivityDetail details) {
        this.details = details;
    }

    public String getStarDate() {
        return starDate;
    }

    public void setStarDate(String starDate) {
        this.starDate = starDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }
}
