package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.user.User;
import com.codeup.capstonestarter.data.user.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/users", headers =
"Accept = application/json" , produces = "application/json")
public class UserController {

    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;

public UserController(UserRepository userRepository){
    this.userRepository = userRepository;
}

@GetMapping
    public List<User> getOne(){return  userRepository.findAll();}


    //need to create security package
//@PostMapping("/create")
//    @PreAuthorize("!hasAuthority('USER')")
//    private void createUser(@RequestBody User user){
////    user.setPassword(passwordEncoder.encode(user.getPassword()));
//    userRepository.save(user);
//}



}
