package com.codeup.capstonestarter.data.activity;

import com.codeup.capstonestarter.data.address.Address;
import com.codeup.capstonestarter.data.location.Location;
import com.codeup.capstonestarter.data.trip.Trip;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "activity")
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REFRESH})
//   @JsonIgnoreProperties({"location", "country", "getStartDate", "endDate", "owner", "collaborators"})
    private Trip trip;

//    @OneToOne (cascade = CascadeType.ALL)
//    @JoinColumn(name = "location_id", referencedColumnName = "id")
//    private Location location;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "activityDetail_id", referencedColumnName = "id")
    private ActivityDetail activityDetail;

    @Column(nullable = false, length = 100)
    private String startDate;

    @Column(nullable = false, length = 100)
    private String endDate;

    public Activity() {
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
        return startDate;
    }

    public void setStarDate(String starDate) {
        this.startDate = starDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }
}
