package com.compolo.compolo.model;

import jakarta.persistence.*;
import jdk.jfr.Category;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;
    private int numberOfPages;
    private String publisher;
    private String condition; // Neuf, Très Bon, Bon, Moyen, Mauvais

    @ManyToMany
    @JoinTable(
            name = "book_category",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private Set<Category> categories = new HashSet<>();

    // Getters and setters
}
