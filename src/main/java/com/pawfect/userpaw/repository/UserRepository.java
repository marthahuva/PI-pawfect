package com.pawfect.userpaw.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pawfect.userpaw.model.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
	//JPQL 
	@Query("SELECT u FROM UserEntity u WHERE u.email =?1")
	UserEntity getByEmail(String email);
	
}
