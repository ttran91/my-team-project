package com.springboot.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	
	@GetMapping("/orderForm")
	public List<OrderForm> getAllOrderFormData(
					@RequestParam("page") Integer page,
					@RequestParam("size") Integer size){
			
		Pageable pageable=PageRequest.of(page, size);
		
		return orderFormRepository.findAll(pageable).getContent();
		
	}
	
	
	
	
	
	
	
	
	

}
