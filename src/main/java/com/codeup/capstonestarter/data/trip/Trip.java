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

//    @Column(nullable = false)
//    private Long location_id;

    @Column(nullable = false)
    private String country;

    @Column(nullable = false)
    private String starDate;

    @Column(nullable = false)
    private String endDate;

    @ManyToOne (cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE})
    @JsonIgnoreProperties({"owned_trips", "password"})
    private User owner;

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {/*CascadeType.MERGE, */CascadeType.DETACH, CascadeType.REFRESH},
            targetEntity = User.class
)
    @JoinTable(
            name="user_trip",
            //What are your two foreign keys for your two tables
            joinColumns = {@JoinColumn(name = "trip_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    @JsonIgnoreProperties({"owned_trips", "password"})
    private Collection<User> collaborators;


    public Trip() {}

    public Trip(Long id, String country, String starDate, String endDate) {
        this.id = id;
        this.country = country;
        this.starDate = starDate;
        this.endDate = endDate;
    }

    public Trip(Long id, String country, String starDate, String endDate, User owner) {
        this.id = id;
        this.country = country;
        this.starDate = starDate;
        this.endDate = endDate;
        this.owner = owner;
    }

    public Trip(Long id, String country, String starDate, String endDate, User owner, Collection<User> collaborators) {
        this.id = id;
        this.country = country;
        this.starDate = starDate;
        this.endDate = endDate;
        this.owner = owner;
        this.collaborators = collaborators;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
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

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public Collection<User> getCollaborators() {
        return collaborators;
    }

    public void setCollaborators(Collection<User> collaborators) {
        this.collaborators = collaborators;
    }
}

