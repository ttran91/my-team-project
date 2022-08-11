package com.springboot.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.backend.model.OrderForm;

public interface OrderFormRepository extends JpaRepository<OrderForm, Long>{

}
