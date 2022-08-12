package com.springboot.backend.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.backend.dto.FoodStatDto;
import com.springboot.backend.model.Food;
import com.springboot.backend.model.Vendor;
import com.springboot.backend.repository.FoodRepository;
import com.springboot.backend.repository.VendorRepository;


@RestController
public class FoodController {
	
	@Autowired
	private FoodRepository foodRepository;

	@Autowired
	private VendorRepository vendorRepository;
	
	//List all the data to the user
	@GetMapping("/food")
	public List<Food> getAllFood(@RequestParam(name="page", required = false, defaultValue = "0") Integer page,
			@RequestParam(name="size",required=false,defaultValue = "100") Integer size) {
			if(page < 0)
				page=0;
		
		Pageable pageable=PageRequest.of(page, size);
		return foodRepository.findAll(pageable).getContent();
	}
	
	@PostMapping("/food/{vid}")
	public Food postFood(@RequestBody Food food, @PathVariable("vid") Long vid) {
		// Go to repo and fetch 
		Optional<Vendor> optional = vendorRepository.findById(vid);
		
		if(!optional.isPresent())
			throw new RuntimeException("Vendor ID is Invalid!!");
		
		Vendor vendor;
		vendor = optional.get();
		
		food.setVendor(vendor);
		
		//Save the product
		return foodRepository.save(food);
		
		
	}
	
	@GetMapping("/food/stats")
	public List<FoodStatDto> getFoodStats() {
		List<Food> list = foodRepository.findAll(); 
		List<FoodStatDto> listDto = new ArrayList<>();
		Map<String,Integer> statMap = new HashMap<>();
		Map<String, List<Food>> map 
					= list.stream().collect(Collectors.groupingBy(f->f.getFoodCategory()));

		for(Map.Entry<String, List<Food>> e: map.entrySet()) {
			FoodStatDto dto = new FoodStatDto();
			dto.setFoodCategory(e.getKey());
			dto.setCount(e.getValue().size());
			listDto.add(dto);
		}
		return listDto; 
	
	}
	
	
	@DeleteMapping("/food/{id}")
	public void deleteOrderForm(@PathVariable("id")Long id){
		foodRepository.deleteById(id);
	
	}
}