package com.codeup.capstonestarter.data.user;

import javax.persistence.*;
import java.util.Collection;


@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @OneToMany(mappedBy = "trips")
//    private Collection<Trip> trips;

    @Column(nullable = false, length = 150)
    private String full_nme;


    @Column(nullable = false, length = 150)
    private String username;

    @Column(nullable = false, length = 255)
    private String password;

    @Column(nullable = false, length = 255)
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role = Role.USER;

    public enum Role {USER, ADMIN}


    public User(Long id,String full_nme,String username, String email, String password) {
        this.id = id;
        this.full_nme= full_nme;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User(String username){
        this.username = username;
    }

    public User() {
    }

//    public Collection<Trip> getTrips() {
//        return trips;
//    }
//
//    public void setTrips(Collection<Trip> trips) {
//        this.trips = trips;
//    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getFull_nme() {
        return full_nme;
    }

    public void setFull_nme(String full_nme) {
        this.full_nme = full_nme;
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


}
