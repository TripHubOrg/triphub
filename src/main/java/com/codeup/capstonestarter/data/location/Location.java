package com.codeup.capstonestarter.data.location;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "location")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String location_name;

    @Column(nullable = false, length = 100)
    private BigDecimal lon;

    @Column(nullable = false, length = 100)
    private BigDecimal lat;

    public Location() {}

    public Location(Long id, String location_name, BigDecimal lon, BigDecimal lat) {
        this.id = id;
        this.location_name = location_name;
        this.lon = lon;
        this.lat = lat;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocation_name() {
        return location_name;
    }

    public void setLocation_name(String location_name) {
        this.location_name = location_name;
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
