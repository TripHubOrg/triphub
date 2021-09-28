package com.codeup.capstonestarter.data.activity;

import com.codeup.capstonestarter.data.address.Address;
import com.codeup.capstonestarter.data.location.Location;
import com.codeup.capstonestarter.data.trip.Trip;

import javax.persistence.*;

@Entity
@Table(name = "activity")
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REFRESH})
    private Trip trip;

    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name = "location_id", referencedColumnName = "id")
    private Location location;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "activityDetail_id", referencedColumnName = "id")
    private ActivityDetail activityDetail;

    @Column(nullable = false, length = 100)
    private String starDate;

    @Column(nullable = false, length = 100)
    private String endDate;

    public Activity() {
    }

    public Activity(Long id, Trip trip, Location location, Address address, ActivityDetail activityDetail, String starDate, String endDate) {
        this.id = id;
        this.trip = trip;
        this.location = location;
        this.address = address;
        this.activityDetail = activityDetail;
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

    public ActivityDetail getActivityDetail() {
        return activityDetail;
    }

    public void setActivityDetail(ActivityDetail activityDetail) {
        this.activityDetail = activityDetail;
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
