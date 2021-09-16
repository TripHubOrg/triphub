package com.codeup.capstonestarter.data.trip;

import com.codeup.capstonestarter.data.user.User;

import java.util.Collection;

public class Trip {
    private Long id;
    private Long location_id;
    private String country;
    private String timezone;
    private String starDate;
    private String endDate;
    private User owner;
    private Collection<User> users;

    public Trip(Long id, Long location_id, String country, String timezone, String starDate, String endDate) {
        this.id = id;
        this.location_id = location_id;
        this.country = country;
        this.timezone = timezone;
        this.starDate = starDate;
        this.endDate = endDate;
    }

    public Trip(Long id, Long location_id, String country, String timezone, String starDate, String endDate, Collection<User> users) {
        this.id = id;
        this.location_id = location_id;
        this.country = country;
        this.timezone = timezone;
        this.starDate = starDate;
        this.endDate = endDate;
        this.users = users;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getLocation_id() {
        return location_id;
    }

    public void setLocation_id(Long location_id) {
        this.location_id = location_id;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
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

    public Collection<User> getUsers() {
        return users;
    }

    public void setUsers(Collection<User> users) {
        this.users = users;
    }
}

