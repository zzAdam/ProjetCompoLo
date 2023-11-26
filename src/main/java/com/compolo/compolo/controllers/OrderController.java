package com.compolo.compolo.controllers;

import com.compolo.compolo.model.Order;
import com.compolo.compolo.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping
    public String listOrders(Model model) {
        model.addAttribute("orders", orderRepository.findAll());
        return "orders/list";
    }

    // ... autres méthodes pour créer, visualiser, et gérer des commandes ...
}
