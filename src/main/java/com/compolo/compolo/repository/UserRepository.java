package com.compolo.compolo.repository;

import com.yourpackage.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Méthodes pour trouver un utilisateur par son nom d'utilisateur, par exemple
    User findByUsername(String username);
}
