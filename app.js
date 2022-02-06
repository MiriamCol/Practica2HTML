//JAVASCRIPT PARA EL REGISTRO DEL USUARIO

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


const form = document.querySelector("#signup");

const MENSAJE_NOMBRE_VACIO = "Por favor, introduzca su nombre";
const MENSAJE_APELLIDOS_VACIOS="Por favor, introduzca sus apellidos"
const MENSAJE_CONTRASENA_VACIA= "Por favor, introduzca una contraseña";
const MENSAJE_IDENT_VACIO= "Por favor, introduzca su identificador";


form.addEventListener("submit", function (event) {
   // stop form submission
   event.preventDefault();


   // validate the form
   let nameValid = hasValue(form.elements["fname"], MENSAJE_NOMBRE_VACIO);
   let surnameValid= hasValue(form.elements["lname"], MENSAJE_APELLIDOS_VACIOS);
   let passwordValid= hasValue(form.elements["password"], MENSAJE_CONTRASENA_VACIA);
   let identValid = hasValue(form.elements["identification"], MENSAJE_IDENT_VACIO);

   // if valid, submit the form.

   if (nameValid && surnameValid && passwordValid && identValid)
   {

      alert("El nombre introducido es: " + form.elements["fname"].value + "\nLos apellidos son: " + form.elements["lname"].value + "\nEl identificador es: " + form.elements["identification"].value+ "\nLa contraseña es es: " + form.elements["password"].value + "\nSe ha registrado el usuario correctamente");

   }

});

