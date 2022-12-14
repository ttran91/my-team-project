package com.springboot.backend.controller;


import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.springboot.backend.dto.OrderFormDto;
import com.springboot.backend.dto.OrderFormEditDto;
import com.springboot.backend.model.Customer;
import com.springboot.backend.model.Inventory;
import com.springboot.backend.model.Order;
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
	public List<OrderForm> getAllOrderFormData(
			  @RequestParam(name = "page", required = false, defaultValue = "0") Integer page, //to bypass pagination
			   @RequestParam(name = "size", required = false, defaultValue = "10000") Integer size){
				
				
			
			Pageable pageable=PageRequest.of(page, size);
			
			return orderFormRepository.findAll(pageable).getContent();
		}
	
	
	@GetMapping("/orderForm/stats")
	public List<OrderFormDto> getFormStats() {
		List<OrderForm> list = orderFormRepository.findAll();
		System.out.println(list); //double checking what list is returning
		List<OrderFormDto> listDto = new ArrayList<>();
		Map<String,Integer> statMap = new HashMap<>();
		Map<String, List<OrderForm>> map
							= list.stream().collect(Collectors.groupingBy(o->o.getOrderStatus()));
		
		for(Map.Entry<String, List<OrderForm>> o: map.entrySet()) {
			OrderFormDto dto = new OrderFormDto();
			dto.setOrderStatus(o.getKey());
			dto.setCount(o.getValue().size());
			listDto.add(dto);
		}
		return listDto;
		
	}
	
	@DeleteMapping("/orderForm/{id}")
	public void deleteOrderForm(@PathVariable("id")Long id){
		orderFormRepository.deleteById(id);
		
		
	}
	
	@GetMapping("/orderForm/single/{id}")
	public OrderForm getOrderFormById(@PathVariable("id") Long id) {
		Optional<OrderForm> optional = orderFormRepository.findById(id);
		if(optional.isPresent())
			return optional.get();
		throw new RuntimeException("ID in invalid");
	}
	
	
	@PutMapping("/orderForm/edit/{id}")
	public OrderForm orderFormEdit(@PathVariable long id, @RequestBody OrderFormEditDto newForm) {
		Optional<OrderForm> optional = orderFormRepository.findById(id);
		
		if(optional.isPresent()) {
		 
		OrderForm existingof = optional.get();
		existingof.setcName(newForm.getcName());
		existingof.setOrderStatus(newForm.getOrderStatus());
		existingof.setOrderCost(newForm.getOrderCost());
		existingof.setcPnumber(newForm.getcPnumber());
		
		return orderFormRepository.save(existingof);
		
		
		
		
		}
		else
			throw new RuntimeException("ID is inavlid");
		
	}
	
	

	

	
	
	
	
	
	
	
	
	
	
	
	

}
