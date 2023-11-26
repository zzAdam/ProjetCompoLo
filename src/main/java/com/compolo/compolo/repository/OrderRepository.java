package com.compolo.compolo.repository;

import com.yourpackage.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    // Méthodes pour rechercher des commandes par utilisateur, par exemple
}
