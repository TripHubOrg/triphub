package com.codeup.capstonestarter.data.location;

import java.math.BigDecimal;

public class Location {
    private Long id;
    private String location_name;
    private BigDecimal lon;
    private BigDecimal lat;

    public Location() {
    }

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
