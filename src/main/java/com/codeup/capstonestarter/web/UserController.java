package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.user.User;
import com.codeup.capstonestarter.data.user.UserRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value="/api/users",headers = "Accept=application/json")
public class UserController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepository,PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }


    //*********** CREATE NEW USER *********************
    @PostMapping("/registerNewUser")
    private void createUser(@RequestBody User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }


    //************** FIND USERS ********************************
    @GetMapping("{id}")
    private User findUserById(@PathVariable Long id){
        return userRepository.getById(id);
    }

    @GetMapping("/findByUsername")
    private Optional<User> findUserByUsername(@RequestParam String username){
        return userRepository.findByUsername(username);}

    @GetMapping("/findByEmail")
    private User findUserByEmail(@RequestParam String email){
        return (User)userRepository.findByEmail(email).get();}

    //************** UPDATE USERS ***********************************
    @PutMapping("{id}")
    private void updateUser(@PathVariable Long id, @RequestBody User user){
        User existingUser = userRepository.getById(id);

        if ( !(user.getUsername() == null) ) {
            existingUser.setUsername( user.getUsername() );
        }
        if ( !(user.getPassword() == null) ) {
            existingUser.setPassword( user.getPassword() );
        }
        if ( !(user.getEmail() == null) ) {
            existingUser.setEmail( user.getEmail() );
        }
        if ( !(user.getFull_name() == null) ) {
            existingUser.setFull_name( user.getFull_name() );
        }

        userRepository.save(existingUser);
    }

    @DeleteMapping("{id}")
    private void deleteUser(@PathVariable Long id){
        System.out.println("Deleting user with id " + id);
        userRepository.deleteById(id);
    }


    @PutMapping ("{id}/updatePassword")
    private void updatePassword(@PathVariable Long id, @RequestParam(required = false) String oldPassword, @Valid @Size(min = 3) @RequestParam String newPassword){

    }




}