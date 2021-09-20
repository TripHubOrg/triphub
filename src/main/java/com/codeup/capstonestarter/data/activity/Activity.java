package com.codeup.capstonestarter.data.activity;

import javax.persistence.*;

@Entity
@Table(name = "activity")
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String trip;

    @Column(nullable = false, length = 100)
    private String location;

    @Column(nullable = false, length = 100)
    private String address;

    @Column(nullable = false, length = 100)
    private String details;

    @Column(nullable = false, length = 100)
    private String starDate;

    @Column(nullable = false, length = 100)
    private String endDate;

    public Activity() {
    }

    public Activity(Long id, String trip, String location, String address, String details, String starDate, String endDate) {
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

    public String getTrip() {
        return trip;
    }

    public void setTrip() {
        this.trip = trip;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation() {
        this.location = location;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress() {
        this.address = address;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails() {
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
