package com.compolo.compolo.repository;

import com.compolo.compolo.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    // Méthodes personnalisées pour rechercher des catégories, si nécessaire
}
