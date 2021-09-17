package com.codeup.capstonestarter.data.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<Object> findByEmail(String email);

    Optional<User> findByUsername(String username);
}
