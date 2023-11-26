package com.compolo.compolo.repository;

import com.yourpackage.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    // Vous pouvez ajouter des méthodes personnalisées si nécessaire
}
