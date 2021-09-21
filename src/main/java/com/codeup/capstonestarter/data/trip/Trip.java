package com.codeup.capstonestarter.data.trip;

import com.codeup.capstonestarter.data.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "trips")
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long location_id;

    @Column(nullable = false)
    private String country;

    @Column(nullable = false)
    private String timezone;

    @Column(nullable = false)
    private String starDate;
    @Column(nullable = false)
    private String endDate;

//    @ManyToOne
//    @Column(nullable = false)
//    private User owner;

//    @ManyToMany(mappedBy = "trips")
//    @JsonIgnoreProperties("trips")
//    private Collection<User> collaborators;


    public Trip() {}

    public Trip(Long id, Long location_id, String country, String timezone, String starDate, String endDate) {
        this.id = id;
        this.location_id = location_id;
        this.country = country;
        this.timezone = timezone;
        this.starDate = starDate;
        this.endDate = endDate;
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

//    public User getOwner() {
//        return owner;
//    }
//
//    public void setOwner(User owner) {
//        this.owner = owner;
//    }
//
//    public Collection<User> getCollaborators() {
//        return collaborators;
//    }
//
//    public void setCollaborators(Collection<User> collaborators) {
//        this.collaborators = collaborators;
//    }
}

