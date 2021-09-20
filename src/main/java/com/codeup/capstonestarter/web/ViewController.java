package com.codeup.capstonestarter.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ViewController {

    @Value("${OPEN_TRIP_MAP_API_KEY_WAGNER}")
    private String keyWagner;
    @Value("${OPEN_TRIP_MAP_API_KEY_RAUL}")
    private String keyRaul;
    @Value("${OPEN_TRIP_MAP_API_KEY_MOSES}")
    private String keyMoses;
    @Value("${OPEN_TRIP_MAP_API_KEY_NATHAN}")
    private String keyNathan;


    @RequestMapping({"/", "/home" , "/login", "/register", "/attractions", "/triptrack","/trips","/userhomepage"})
    public String showView(){
        return "forward:/index.html";
    }

    @RequestMapping(path = "/js/keys.js", produces = "application/javascript")
    @ResponseBody
    public String apikey() {
        // add more export functions and key args as you need them
        return String.format("export function openTripMapAPIKeyRaul(){\n" +
                        "    return `%s`;\n" +
                        "}\n" +
                "export function openTripMapAPIKeyWagner(){\n" +
                "    return `%s`;\n" +
                "}\n" +
                "export function openTripMapAPIKeyNathan(){\n" +
                "    return `%s`;\n" +
                "}\n" +
                "export function openTripMapAPIKeyMoses(){\n" +
                "    return `%s`;\n" +
                "}\n" +
                "}", keyRaul,keyWagner,keyNathan,keyMoses);
    }
}


