package com.springboot.backend.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.springboot.backend.dto.OrderFormDto;
import com.springboot.backend.model.OrderForm;
import com.springboot.backend.repository.CustomerRepository;
import com.springboot.backend.repository.OrderFormRepository;

@RestController
public class OrderFormController {
	
	@Autowired
	private OrderFormRepository orderFormRepository;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	
	
	@PostMapping("/orderForm")
	public OrderForm postOrderForm(@RequestBody OrderForm orderForm) {
		
		
		return orderFormRepository.save(orderForm);
		
	}
	
	
	@GetMapping("/orderForm")
	public List<OrderFormDto> getAllOrderFormData(
					@RequestParam("page") Integer page,
					@RequestParam("size") Integer size){
			
		Pageable pageable=PageRequest.of(page, size);
		
		 List<OrderForm> list = orderFormRepository.findAll(pageable).getContent();
		 List<OrderFormDto> listOfDto = new ArrayList<>();
		  list.stream().forEach(of->{
			  OrderFormDto ofDto = new OrderFormDto();
			  ofDto.setId(of.getId());
			  ofDto.setcName(of.getcName());
			  ofDto.setOrderStatus(of.getOrderStatus());
			  ofDto.setOrderCost(of.getOrderCost());
			  ofDto.setcPnumber(of.getcPnumber());
			  
			  listOfDto.add(ofDto);
		  });
		 
		 
		 return listOfDto;
		
	}
	
	@DeleteMapping("/orderForm/{id}")
	public void deleteOrderForm(@PathVariable("id")Long id){
		orderFormRepository.deleteById(id);
		
		
	}
	
	
	
	
	
	
	
	
	

}
