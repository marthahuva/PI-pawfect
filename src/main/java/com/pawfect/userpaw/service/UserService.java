package com.pawfect.userpaw.service;

import java.util.List;


import org.springframework.stereotype.Service;

import com.pawfect.userpaw.exceptions.UserNotFoundException;
import com.pawfect.userpaw.model.UserEntity;
import com.pawfect.userpaw.repository.UserRepository;

@Service
public class UserService {
	
	private final UserRepository userRepository;
	
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	//Obtener todos los users
	public List<UserEntity> getAll(){
		return this.userRepository.findAll();
	}
	
	//Método para obtener un user mediante un Id
	public UserEntity getById(Long id) {
		return this.userRepository.findById(id).
				orElseThrow(() -> new UserNotFoundException(id));
	}
	
	//Método para crear un nuevo usuario
	public UserEntity createUser(UserEntity newUser) {
		return this.userRepository.save(newUser);
	}
	
	//Método para eliminar un nuevo usuario mediante Id
	public void deleteUser(Long id) {
		if(this.userRepository.existsById(id)) {
			this.userRepository.deleteById(id);
		}else {
			throw new UserNotFoundException(id);
		}
	}
	
	//getByEmail() .... JPQL y ResponseEntity
	public UserEntity getByEmail(String email) {
		return this.userRepository.getByEmail(email);
	}
	

}
