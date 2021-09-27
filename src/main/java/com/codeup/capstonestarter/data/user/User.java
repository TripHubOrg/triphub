package com.codeup.capstonestarter.data.user;

import com.codeup.capstonestarter.data.trip.Trip;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.Collection;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String full_name;

    @Column(nullable = false, length = 100)
    private String username;

    @Email
    @Column(nullable = false)
    private String email;

    @Column
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @JsonIgnore
    private Role role = Role.USER;

    public enum Role {USER, ADMIN,}

    @OneToMany(mappedBy = "owner")
    @JsonIgnoreProperties("owner")
    private Collection<Trip> owned_trips;

    @ManyToMany(
            fetch = FetchType.LAZY,
            cascade = {/*CascadeType.MERGE, */CascadeType.DETACH, CascadeType.REFRESH},
            targetEntity = Trip.class
    )
    @JoinTable(
            name="user_trip",
            //What are your two foreign keys for your two tables
            joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "trip_id", nullable = false, updatable = false)},
            foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT),
            inverseForeignKey = @ForeignKey(ConstraintMode.CONSTRAINT)
    )
    private Collection<Trip> collab_trips;


    public User() {
    }

    public User(String full_name, String username, String email, String password) {
        this.full_name = full_name;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User(Long id) {
        this.id = id;
    }

    public User(Long id, String full_name, String username, String email, String password, Role role, Collection<Trip> owned_trips, Collection<Trip> collab_trips) {
        this.id = id;
        this.full_name = full_name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.owned_trips = owned_trips;
        this.collab_trips = collab_trips;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Collection<Trip> getOwned_trips() {
        return owned_trips;
    }

    public void setOwned_trips(Collection<Trip> owned_trips) {
        this.owned_trips = owned_trips;
    }
}