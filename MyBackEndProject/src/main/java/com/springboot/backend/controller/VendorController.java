package com.springboot.backend.controller;

import java.util.ArrayList;
import java.util.List;
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

import com.springboot.backend.dto.FoodDto;
import com.springboot.backend.dto.VendorDto;
import com.springboot.backend.model.Customer;
import com.springboot.backend.model.Food;
import com.springboot.backend.model.Order;
import com.springboot.backend.model.UserInfo;
import com.springboot.backend.model.Vendor;
import com.springboot.backend.repository.FoodRepository;
import com.springboot.backend.repository.UserRepository;
import com.springboot.backend.repository.VendorRepository;

@RestController
public class VendorController {

	@Autowired
	private VendorRepository vendorRepository;
	
	@Autowired
	private FoodRepository foodRepository; 
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/vendor/{uid}") 
	public Vendor postVendor(@RequestBody Vendor vendor, @PathVariable("uid") Long uid) {
		Optional<UserInfo> optional = userRepository.findById(uid);
		
		if(!optional.isPresent())
			throw new RuntimeException("User ID is Invalid!!");
		
		UserInfo userInfo;
		userInfo = optional.get();
		
		vendor.setUserInfo(userInfo);
	
		return vendorRepository.save(vendor);
		
		
	}
	
	@GetMapping("/vendor")
	public List<VendorDto> getAllVendors(
			@RequestParam(name = "page",required = false, defaultValue = "0") Integer page, 
			@RequestParam(name = "size",required = false, defaultValue = "100000") Integer size ) {
		
		Pageable pageable=PageRequest.of(page, size);
		List<Vendor>  list = vendorRepository.findAll(pageable).getContent(); //20
		List<VendorDto> listVDto = new ArrayList<>();
		
		List<Food> listFood = foodRepository.findAll();
		
		list.stream().forEach(v->{
			List<FoodDto> listFDto = new ArrayList<>(); 
			VendorDto vDto = new VendorDto(); 
			vDto.setId(v.getId());
			vDto.setName(v.getName());
			List<Food> filteredList = listFood.stream()
						.filter(f-> f.getVendor().getId().equals(v.getId()))
						.collect(Collectors.toList());
			vDto.setNumOfFood(filteredList.size());
			filteredList.stream().forEach(f->{
				FoodDto dto = new FoodDto(); 
				dto.setId(f.getId());
				dto.setName(f.getName());
				dto.setFoodPrice(f.getFoodPrice());
				dto.setFoodCategory(f.getFoodCategory());
				dto.setVid(f.getVendor().getId());
				dto.setVname(f.getVendor().getName());
				dto.setVphoneNumber(f.getVendor().getPhoneNumber());
				dto.setVemail(f.getVendor().getEmail());
				listFDto.add(dto);
			});
			vDto.setFood(listFDto);
			listVDto.add(vDto);
		});
		return listVDto; 
	}
	
	@GetMapping("/vendor/{id}") 
	public Vendor getVendorById(@PathVariable("id") Long id) { 
		Optional<Vendor> optional = vendorRepository.findById(id);
		if(optional.isPresent())
			return optional.get();
		else
			throw new RuntimeException("ID is invalid");
	}
	
	@GetMapping("/vendor/food/{fid}")
	public List<Vendor> getVendorByFoodId(@PathVariable("fid") Long fid){
		List<Vendor> list = vendorRepository.findByFoodId(fid);
		return list;
	}

	
	@DeleteMapping("/vendor/{id}")
	public void deleteVendor(@PathVariable("id") Long id){
		vendorRepository.deleteById(id);
		
	}
	
	@PutMapping("/vendor/{id}") 
	public Vendor updateAccount(@PathVariable("id") Long id, 
								@RequestBody Vendor newVendor) {
		Optional<Vendor> optional = vendorRepository.findById(id);
		if (optional.isPresent()) {
			Vendor existingVendor = optional.get();
			existingVendor.setName(newVendor.getName());
			existingVendor.setPhoneNumber(newVendor.getPhoneNumber());
			existingVendor.setEmail(newVendor.getEmail());
			existingVendor.setUserInfo(newVendor.getUserInfo());
			
			return vendorRepository.save(existingVendor);
		}
		throw new RuntimeException("ID is Invalid");
	}
	
	
	
	
	
}








