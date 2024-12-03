package com.pawfect.userpaw.model;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="users")
public class UserEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Establece la estrategia de Generación del valor, en este caso una identidad única (AI) 
	@Column(name = "id_user")//Anota el atributo como Columna de la tabla con diferentes propiedades
	private Long idUser;
	
	
	@Column(name="name", length = 50, nullable = false) //nullable = false == not null. Aqui también se puede definir el tipo de variable, como boolean o así 
	private String name;
	
	@Column(name = "email", length = 100, nullable = false, unique = true)
	private String email;
	
	@Column(name="password", length = 60, nullable = false, unique = false)
	private String password;
	
	
	
	public UserEntity(){
		
	}

	public UserEntity(Long idUser, String name, String email, String password) {
		super();
		this.idUser = idUser;
		this.name = name;
		this.email = email;
		this.password = password;
	}

	public Long getIdUser() {
		return idUser;
	}

	public void setIdUser(Long idUser) {
		this.idUser = idUser;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "UserEntity [idUser=" + idUser + ", name=" + name + ", email=" + email
				+ ", password=" + password + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(email, idUser, name, password);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UserEntity other = (UserEntity) obj;
		return Objects.equals(email, other.email) && Objects.equals(idUser, other.idUser)
				&& Objects.equals(name, other.name) && Objects.equals(password, other.password);
	}
	
	
	

	
	
	
}
