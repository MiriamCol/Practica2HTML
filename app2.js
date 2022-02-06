//JAVASCRIPT PARA EL INICIO DE SESION.
//importante: El email se introduce el que el usuario quiera y la contraseña es: contraseña

// show a message with a type of the input
function showMessage(input, message, type) {
   // get the small element and set the message
   const msg = input.parentNode.querySelector("small");
   msg.innerText = message;
   // update the class for the input
   input.className = type ? "success" : "error";
   return type;
}

function showError(input, message) {
   return showMessage(input, message, false);
}

function showSuccess(input) {
   return showMessage(input, "", true);
}

function hasValue(input, message) {
    if (input.value.trim() === "") {
    		return showError(input, message);
    	}
   return showSuccess(input);
}

function validatePassword(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (input.value!=requiredMsg)
	{
		return showError(input, invalidMsg);
	}
	return true;

}


function validateEmail(input, invalidMsg) {

   // validate email format
   const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   const email = input.value.trim();
   if (!emailRegex.test(email)) {
      return showError(input, invalidMsg);
   }
   return true;
}


const form = document.querySelector("#signup");

const MENSAJE_EMAIL_VACIO = "Por favor, introduzca su correo electrónico";
const MENSAJE_EMAIL_INVALIDO="Por favor, introduzca un email válido"
const MENSAJE_CONTRASENA_VACIA= "Por favor, introduzca la contraseña";
const CONTRASENA_REQUERIDA= "contraseña";
const MENSAJE_CONTRASENA_INCORRECTA= "Contraseña incorrecta, la correcta es: contraseña"

form.addEventListener("submit", function (event) {
   // stop form submission
   event.preventDefault();


   // validate the form
   let emailValid = hasValue(form.elements["fname"], MENSAJE_EMAIL_VACIO);
   let passwordValid= hasValue(form.elements["lname"], MENSAJE_CONTRASENA_VACIA);
   let validatePasswordd = validatePassword(form.elements["lname"], CONTRASENA_REQUERIDA, MENSAJE_CONTRASENA_INCORRECTA);
   //let validateEmaill=validateEmail(form.elements["lname"],MENSAJE_EMAIL_INVALIDO,)
   // if valid, submit the form.

   if (emailValid && passwordValid && validatePasswordd)
   {

      alert("El email introducido es: " + form.elements["fname"].value + "\nLa contraseña que se ha introducido correctamente es: " + form.elements["lname"].value+ "\nSe ha iniciado sesión correctamente");

   }

});

