package com.codeup.capstonestarter.data.activity;


import javax.persistence.*;

@Entity
@Table(name = "activity_details")
public class ActivityDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private String comments;

    private String img;


}
