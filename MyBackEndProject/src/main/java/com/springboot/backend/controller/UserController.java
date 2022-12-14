package com.springboot.backend.controller;

import java.security.Principal;
import java.time.LocalDate;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.backend.dto.UserDto;
import com.springboot.backend.dto.UserEditDto;
import com.springboot.backend.dto.UserInfoDto;
import com.springboot.backend.model.Customer;
import com.springboot.backend.model.UserInfo;
import com.springboot.backend.repository.UserRepository;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired(required=true)
	private PasswordEncoder passwordEncoder; 
	
	@PostMapping("/user")
//	public UserInfo postUser(@RequestBody UserInfo user) {
//		UserInfo info = userRepository.getByUsername(user.getUsername());
//		if(info != null)
//			throw new RuntimeException("Username Invalid!!!");
//		
//		String password = user.getPassword();
//		password = passwordEncoder.encode(password);
//		user.setPassword(password);
//		return userRepository.save(user);
	public void postUser(@RequestBody UserDto userDto) {
		 String str = new String(Base64.getDecoder().decode(userDto.getEncodedCredentials())); 
		 String username = str.split("@%")[0];
		 String password = str.split("@%")[1];

		 UserInfo info = new UserInfo(); 
		 info.setName(userDto.getName());
		 info.setPassword(passwordEncoder.encode(password));
		 info.setUsername(username);
		 info.setPasswordLastReset(LocalDate.now());
		 info.setSecurityQuestion(userDto.getSecurityQuestion());
		 info.setSecurityAnswer(userDto.getSecurityAnswer());
		 info.setAccountType(userDto.getAccountType());

		 userRepository.save(info); 
		
	}
	
	@GetMapping("/user/security/info/{username}")
	public UserEditDto getUserInfo(@PathVariable("username") String username) {
		UserInfo info =userRepository.getByUsername(username);
		UserEditDto dto = new UserEditDto(info.getId(), info.getName(), 
				"", info.getSecurityQuestion());
		return dto; 
	}

	@GetMapping("/verify-security-answer")
	public void verifySecurityQuestion() {

	}
	
	@GetMapping("/validate-security-answer/{encodedText}")
	public boolean verifySecurityAnswer(@PathVariable("encodedText") String encodedText) {
		boolean status=false;
		String str = new String(Base64.getDecoder().decode(encodedText)); 
		String[] sarr =str.split("--");
		String username = sarr[0]; 
		String answer=sarr[1];
		UserInfo info =userRepository.getByUsername(username);
		if(info.getSecurityAnswer().equalsIgnoreCase(answer)) {
			status=true; 
		}
		return status; 
	}
	
	
	@GetMapping("/login") 
	public UserInfoDto login(Principal principal) {
		String username = principal.getName();
		UserInfo info = userRepository.getByUsername(username);
		UserInfoDto dto = new UserInfoDto();
		dto.setId(info.getId());
		dto.setName(info.getName());
		dto.setUsername(info.getUsername());
		dto.setAccountType(info.getAccountType());
		return dto; 
	}
	
	@GetMapping("/user/{id}")
	public Optional<UserInfo> getUserById(@PathVariable("id") Long id){
        return userRepository.findById(id);
    }
	
	@GetMapping("/user/username")
	public UserEditDto getUserByUsername(Principal principal) {
		UserInfo info = userRepository.getByUsername(principal.getName());
		UserEditDto dto = new UserEditDto(info.getId(), info.getName(), 
				info.getSecurityAnswer(), info.getSecurityQuestion());
		return dto; 
	}
	
	@PutMapping("/user/profile")
	public void profileEdit(Principal pricipal, @RequestBody UserDto dto) {
		String username = pricipal.getName();
		userRepository.updateProfile(username,dto.getName(),dto.getSecurityQuestion(), dto.getSecurityAnswer());
	}
	
	
	@PutMapping("/user/reset-password/{encodedText}")
	public void resetPassword(@PathVariable("encodedText") String encodedText) {
		boolean status=false;
		String str = new String(Base64.getDecoder().decode(encodedText)); 
		String[] sarr =str.split("--");
		String username = sarr[0]; 
		String password=sarr[1];

		String encodedPassword = this.passwordEncoder.encode(password);
		userRepository.resetPassword(username,encodedPassword,LocalDate.now());

	}
	

	
	
	
	
	
	
	
	
}