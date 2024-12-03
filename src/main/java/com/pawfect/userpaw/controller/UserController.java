package com.pawfect.userpaw.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pawfect.userpaw.model.UserEntity;
import com.pawfect.userpaw.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class UserController {
	
	private final UserService userService; 
	
	@Autowired
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	//Recuperar a todos los usuarios
	@GetMapping("/users")
	public List<UserEntity> getUsers(){
		return this.userService.getAll();
	}
	
	//Método para mapear getById
	@GetMapping("/users/{id}")
	public UserEntity findById(@PathVariable(name = "id") Long id) {
		return this.userService.getById(id);
	}
	
	//Método para mapear createUser
	@PostMapping
	public UserEntity newUser(@RequestBody UserEntity user){
		return this.userService.createUser(user);
	}
	
	//Método para eliminar un user por Id
	@DeleteMapping("/delete-user/{id}")
	public void deleteUser(@PathVariable(name = "id") Long id){
		this.userService.deleteUser(id);
	}
	
	//Método para recuperar por Id
	@GetMapping("/users/email/{email}")
	public ResponseEntity<UserEntity> getByEmail(@PathVariable(name = "email") String email) {
	UserEntity userByEmail = this.userService.getByEmail(email);
		
		if(userByEmail == null) {
			return ResponseEntity.notFound().build();
		}
		return new ResponseEntity<UserEntity>(userByEmail, HttpStatus.CONFLICT);
		//return new ResponseEntity<UserEntity>(userByEmail, HttpStatus.OK);
		//return ResponseEntity.ok(userByEmail);
	}
	
	
}
