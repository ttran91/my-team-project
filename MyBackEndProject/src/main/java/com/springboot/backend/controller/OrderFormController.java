package com.springboot.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.backend.model.OrderForm;
import com.springboot.backend.repository.OrderFormRepository;

@RestController
public class OrderFormController {
	
	@Autowired
	private OrderFormRepository orderFormRepository;
	
	
	
	@PostMapping("/orderForm")
	public OrderForm postOrderForm(@RequestBody OrderForm orderForm) {
		
		
		return orderFormRepository.save(orderForm);
		
	}
	
	
	
	
	
	
	
	
	
	

}
