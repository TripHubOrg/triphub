package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.user.User;
import com.codeup.capstonestarter.data.user.UserRepository;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import javax.validation.constraints.Size;
import java.util.List;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json",produces = "application/json")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/create")
    private void createUser(@RequestBody User user){
        userRepository.save(user);
    }

    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }

//    @PutMapping("{id}")
//    private void updateUser(@PathVariable Long id, @RequestBody User user){
//        System.out.println(user.getPassword());
//        System.out.println(user.getEmail());
//        System.out.println(user.getUsername());
//        System.out.println(user.getId());
//        userRepository.save(user);
//    }

    @DeleteMapping("{id}")
    private void deleteUser(@PathVariable Long id){
        System.out.println("Deleting user with id " + id);
        userRepository.deleteById(id);
    }

//    @GetMapping("{id}")
//    private User findById(@PathVariable Long id){
//        return userRepository.getById(id);
//    }

//    @GetMapping("/findByUsername")
//    private Optional<User> findByUsername(@RequestParam String username){
//        return userRepository.findByUsername(username);}

//    @GetMapping("/findByEmail")
//    private User findByEmail(@RequestParam String email){
//        return (User) userRepository.findByEmail(email).get();}

    @PutMapping ("{id}/updatePassword")
    private void updatePassword(@PathVariable Long id, @RequestParam(required = false) String oldPassword, @Valid @Size(min = 3) @RequestParam String newPassword){

    }

}