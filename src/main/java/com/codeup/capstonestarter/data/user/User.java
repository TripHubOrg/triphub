package com.codeup.capstonestarter.data.user;

import com.codeup.capstonestarter.data.trip.Trip;

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
    private Role role = Role.USER;
    public enum Role {USER, ADMIN};

    @ManyToOne
    @JoinColumn(name = "trips_id")
    private Trip trip;

    @OneToMany
    @JoinColumn()
    private Collection<Trip> owned_trips;

    @ManyToMany
    @JoinColumn()
    private Collection<Trip> collab_trips;

    public User(String full_name, Long id, String username, String email, String password) {
        this.full_name = full_name;
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;

    }

    public User() {
    }

    public String setfull_name() {
        return full_name;
    }

    public void getfull_name(Long id) {
        this.full_name = full_name;
    }

    public User(String username) {
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
