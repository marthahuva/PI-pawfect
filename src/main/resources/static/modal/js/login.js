// const regForm = document.getElementById("input-registro");
// console.log(regForm);

// let formUpdate = false; //Variable para validar que solo se ejecute unavez el codigo una vez pasadas las validaciones

// regForm.addEventListener("submit", (event) => {
//   event.preventDefault(); // Evita el envío automático del formulario
//   console.log(event);

//   //validación para que solo se ejecute una vez el codigo una vez pasadas las validaciones usando un valor boolean
//   if (formUpdate) {
//     console.log("Formulario ya enviado correctamente.");
//     return;
//   }

//   // Obtener valores de los campos
//   const nombreF = event.target.elements["nombreForm"].value.trim();
//   const apellido = event.target.elements["apellido"].value.trim();
//   const numTelefono = event.target.elements["telefon"].value.trim();
//   const correo = event.target.elements["email"].value.trim();
//   const contrasena = event.target.elements["contra"].value;
//   const checkPolicy = event.target.elements["check"].value;
//   //Pruebas para saber que si se está ejecutando
//   console.log("name: ", nombreF);
//   console.log("last-name: ", apellido);
//   console.log("phone: ", numTelefono);
//   console.log("email: ", correo);
//   console.log("password: ", contrasena);
//   console.log("checkbox listo ", checkPolicy);

//   //Validando validaciones
//   const data = [...new FormData(regForm)];
//   const dataObject = Object.fromEntries(data);
//   const isValidForm =
//     validateUserName(dataObject) &&
//     validateUserLastName(dataObject) &&
//     validateUserPhone(dataObject) &&
//     validateUserEmail(dataObject) &&
//     validateUserPassword(dataObject) &&
//     validatePrivacyPolicyCheckbox(dataObject);

//   // Si todo es válido
//   if (isValidForm) {
//     formUpdate = true; // Evita el reenvío del formulario

//     //Envía los datos correo y contraseña al LocalStorage
//     localStorage.setItem("email", JSON.stringify(correo));
//     localStorage.setItem("contra", JSON.stringify(contrasena));

//     showUserInfo(dataObject); //Muestra mensaje de aceptación de los datos
//   } else if (
//     //Se trata cada caso particular de las validaciones con mensajes de error
//     !validateUserName(dataObject) ||
//     !validateUserLastName(dataObject) ||
//     !validateUserPhone(dataObject) ||
//     !validateUserEmail(dataObject) ||
//     !validateUserPassword(dataObject) ||
//     !validatePrivacyPolicyCheckbox(dataObject)
//   ) {
//     // Mostrar mensajes específicos por cada campo que falle
//     if (!validateUserName(dataObject)) {
//       showFieldError("El nombre no es válido. Asegúrate de usar solo letras.");
//     }
//     if (!validateUserLastName(dataObject)) {
//       showFieldError(
//         "El apellido no es válido. Asegúrate de usar solo letras."
//       );
//     }
//     if (!validateUserPhone(dataObject)) {
//       showFieldError(
//         "El número de teléfono debe contener exactamente 10 dígitos."
//       );
//     }
//     if (!validateUserEmail(dataObject)) {
//       showFieldError("El correo electrónico no tiene un formato válido.");
//     }
//     if (!validateUserPassword(dataObject)) {
//       showFieldError(
//         "La contraseña debe tener al menos 10 caracteres, incluir una letra mayúscula, un número y un carácter especial."
//       );
//     }
//     if (!validatePrivacyPolicyCheckbox(dataObject)) {
//       showFieldError(
//         "Asegurate de aceptar las políticas de privacidad para continuar."
//       );
//     }
//     return;
//   }
// });

// //Mensaje cuando los datos pasan las validaciones
// function showUserInfo(dataObject) {
//   const alert = `
//       <div class="alert alert-primary mt-2" role="alert">
//         <p>¡Felicidades  ${dataObject.nombreForm} ${dataObject.apellido} ya eres parte de Pawfect Family!</p>
//         <p>Tú correo de registro es:  ${dataObject.email}</p>

//       </div>
//   `;
//   regForm.insertAdjacentHTML("afterend", alert);
// }
// //Función que muestra los distintos mensajes de error para cada validación
// function showFieldError(message) {
//   const alert = `
//       <div class="alert alert-danger mt-2" role="alert">
//         <p>${message}</p>
//       </div>
//   `;
//   regForm.insertAdjacentHTML("beforeend", alert);
// }

// //Elimina las  alertas de error al hacer clic en cualquier campo  del form
// const formFields = regForm.querySelectorAll("input");
// formFields.forEach((field) => {
//   field.addEventListener("click", () => {
//     const alertContainer = regForm.querySelector(".alert-danger");
//     if (alertContainer) {
//       alertContainer.remove(); // Eliminar alerta de error
//     }
//   });
// });

// //Validación para el correo
// function validateUserEmail(dataObject) {
//   const regexEmail =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   const isValidEmail = regexEmail.test(dataObject.email);
//   return isValidEmail;
// }
// //Validación para contraseña
// function validateUserPassword(dataObject) {
//   const regexPassword =
//     /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:<>?[\]\/.,])(?!.*\s).{10,}$/;
//   const isValidPassword = regexPassword.test(dataObject.contra);
//   return isValidPassword;
// }

// //Validación para numero de telefono
// function validateUserPhone(dataObject) {
//   const regexPhone = /^\d{10}$/;
//   const isValidPhone = regexPhone.test(dataObject.telefon);
//   return isValidPhone;
// }

// //Validación para el nombre
// function validateUserName(dataObject) {
//   const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/; // Regex que cree en chat gpt para aceptar letras con acento
//   const isValidName = regexName.test(dataObject.nombreForm);
//   return isValidName;
// }

// //Validación para el apellido
// function validateUserLastName(dataObject) {
//   const regexLastName = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/; // Regex que cree en chat gpt para aceptar letras con acento
//   const isValidLastName = regexLastName.test(dataObject.apellido);
//   return isValidLastName;
// }

// //Validación del check box de politicas de privacidad
// function validatePrivacyPolicyCheckbox(dataObject) {
//   // Verifica si el checkbox fue marcado
//   const isCheckboxChecked = dataObject.check;
//   return isCheckboxChecked;
// }


// const loginForm = document.querySelector("#loginForm")
// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault()
//   const email =   document.querySelector("#email").value
//   const password = document.querySelector("#password").value
//   const Users = JSON.stringify(localStorage.getItem("users")) || []
//   const valisUser = Users.find(user => user.email === email && user.password === password)
//   if (!valisUser){
//     return alert("Usuario y/o contraseña incorrectos")
//   }
//   alert(`bienvenido ${valisUser.name}`)
//   window.location.href = "cd.html"

// })

const loginForm = document.querySelector("#loginForm");
async function fetchUser(email) {
	const url = `http://localhost:8080/api/users/email/${email}`;
	try {
		console.log("COMIENZO DE EJECUCION");
		let response = await fetch(url);
		console.log("response?", response);
		response = await response.json();
		return response;
	} catch (error) {
		console.log("cai a un error?");
		console.error("Error:", error); // Manejo de errores
	}
}

loginForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	const email = document.querySelector("#email").value;
	const password = document.querySelector("#password").value;
	const user = await fetchUser(email);

	console.log("llegue aca???", user);

	// JSON.parse(localStorage.getItem("users")) || [];

	// Buscar al usuario con el email y la contraseña
	const validUser = user.email === email && user.password === password;
  console.log("validacion" , validUser)
	if (!validUser) {
		return alert("Usuario y/o contraseña incorrectos");
	}

	// Si el usuario es válido, muestra un mensaje y redirige
	alert(`Bienvenido ${user.name}`);
	//localStorage.setItem("login_succes", user.name);
	//window.location.href = "cd.html";
});
