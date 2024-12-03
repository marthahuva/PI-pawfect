package com.pawfect.userpaw.exceptions;

public class UserNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	//Para poder construir una excepción necesitasmos un método constructor
	//Método constructor que evalúa un parámetro (Long id) y lanza un mensaje

	public UserNotFoundException(Long id) {
		super("El usuario con id: " + id + " no existe!!!");
	}
	
}
