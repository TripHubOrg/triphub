package com.codeup.capstonestarter.data.location;

import com.codeup.capstonestarter.data.trip.Trip;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "location")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 100)
    private BigDecimal lon;

    @Column(nullable = false, length = 100)
    private BigDecimal lat;

    @OneToOne(mappedBy = "location")
    private Trip trip;

    public Location() {}

    public Location(Long id, String name, BigDecimal lon, BigDecimal lat) {
        this.id = id;
        this.name = name;
        this.lon = lon;
        this.lat = lat;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Trip getTrip() {
        return trip;
    }

    public void setTrip(Trip trip) {
        this.trip = trip;
    }

    public BigDecimal getLon() {
        return lon;
    }

    public void setLon(BigDecimal lon) {
        this.lon = lon;
    }

    public BigDecimal getLat() {
        return lat;
    }

    public void setLat(BigDecimal lat) {
        this.lat = lat;
    }
}
