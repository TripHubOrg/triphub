package com.codeup.capstonestarter.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping({"/", "/home" , "/login", "/register", "/attractions", "/triptrack"})
    public String showView(){
        return "forward:/index.html";
    }
}
