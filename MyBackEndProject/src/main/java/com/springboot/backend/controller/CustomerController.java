package com.springboot.backend.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.backend.dto.CustomerDto;
import com.springboot.backend.model.Customer;
import com.springboot.backend.model.Food;
import com.springboot.backend.model.UserInfo;
import com.springboot.backend.model.Vendor;
import com.springboot.backend.repository.CustomerRepository;
import com.springboot.backend.repository.UserRepository;

@RestController
public class CustomerController {
	
	@Autowired
	CustomerRepository customerRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/customer/{uid}") //Function used to insert a new customer into the database
	public Customer postCustomer(@RequestBody Customer customer, @PathVariable("uid") Long uid) {
		Optional<UserInfo> optional = userRepository.findById(uid);
		
		if(!optional.isPresent())
			throw new RuntimeException("User ID is Invalid!!");
		
		UserInfo userInfo;
		userInfo = optional.get();
		
		customer.setUserInfo(userInfo);
		
		//Save the product
		return customerRepository.save(customer);
		
		
	}

	@GetMapping("/customer") //Function used to return a list of all customers
	public List<CustomerDto> getAllAccounts() {
		List<Customer> list =  customerRepository.findAll();
		List<CustomerDto> listDto = new ArrayList<>(); 
		list.stream().forEach(c->{
			CustomerDto dto = new CustomerDto(); 
			dto.setId(c.getId());
			dto.setCustomerName(c.getCustomerName());
			dto.setCustomerNumber(c.getCustomerPhone());
			dto.setCustomerEmail(c.getCustomerEmail());
			dto.setCustomerBalance(c.getCustomerBalance());
		
			listDto.add(dto);
		});
		
		return listDto;
	}

	@GetMapping("/customer/{cid}") //Function used to return  a specific customer based on their ID
	public Customer getAccountById(@PathVariable("cid") Long cid) {
		Optional<Customer> optional = customerRepository.findById(cid);
		if (optional.isPresent())
			return optional.get();
		throw new RuntimeException("ID is invalid");
	}

	@DeleteMapping("/customer/{cid}") //Function used to delete a customer based on customer ID
	public void deleteAccount(@PathVariable("cid") Long cid) {
		customerRepository.deleteById(cid);
	}

	@PutMapping("/customer/{cid}") //Function used to Adjust a customers Name, Username, and Password
	public Customer updateAccount(@PathVariable("cid") Long cid, @RequestBody Customer newCustomer) {
		Optional<Customer> optional = customerRepository.findById(cid);
		if (optional.isPresent()) {
			Customer existingCustomer = optional.get();
			existingCustomer.setCustomerName(newCustomer.getCustomerName());
			existingCustomer.setUserInfo(newCustomer.getUserInfo());
			
			return customerRepository.save(existingCustomer);
		}
		throw new RuntimeException("ID is Invalid");
	}
	
	@PutMapping("/customer/balance/{cid}") //Function to change A Customers Balance only
	public Customer adjustCustomerBalace(@PathVariable("cid") Long cid, @RequestBody Customer newCustomer) {
		Optional<Customer> optional = customerRepository.findById(cid);
		if (optional.isPresent()) {
			Customer existingCustomer = optional.get();
			existingCustomer.setCustomerBalance(newCustomer.getCustomerBalance());
			
			return customerRepository.save(existingCustomer);
		}
		throw new RuntimeException("ID is Invalid");
	}

}