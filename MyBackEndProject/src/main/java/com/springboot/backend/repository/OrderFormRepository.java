package com.springboot.backend.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import com.springboot.backend.model.OrderForm;

public interface OrderFormRepository extends JpaRepository<OrderForm, Long>{

	

	

}
