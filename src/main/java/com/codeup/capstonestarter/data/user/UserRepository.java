//package com.codeup.capstonestarter.data.user;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//
//import java.util.Optional;
//
//public interface UserRepository extends JpaRepository<User, Long> {
//
//    @Query
//    Optional<User> findByEmail(String email);
//
//    @Query
//    Optional<User> findByUsername(String username);
//
//    @Query
//    Optional<User> fin(String username);
//}
